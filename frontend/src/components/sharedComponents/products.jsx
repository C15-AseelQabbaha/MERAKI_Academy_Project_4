import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, selectProducts, addProduct, updateProduct, deleteProduct } from '../store/productsSlice';
import { Modal, Button, Form } from 'react-bootstrap';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '', brand: '', type: '', description: '', ingredients: '', price: '', skinTypeSuitable: '', image: ''
  });

  // فلترة
  const [filterDescription, setFilterDescription] = useState('');
  const [filterSkin, setFilterSkin] = useState('');

  useEffect(() => { dispatch(fetchProducts()); }, [dispatch]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      ...formData,
      ingredients: formData.ingredients.split(',').map(i => i.trim()),
      skinTypeSuitable: formData.skinTypeSuitable.split(',').map(s => s.trim()),
      price: parseFloat(formData.price)
    };

    if (editingProduct) dispatch(updateProduct({ id: editingProduct.id, updatedProduct: productData }));
    else dispatch(addProduct(productData));

    setShowModal(false);
    setEditingProduct(null);
    setFormData({ name: '', brand: '', type: '', description: '', ingredients: '', price: '', skinTypeSuitable: '', image: '' });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      ...product,
      ingredients: product.ingredients.join(', '),
      skinTypeSuitable: product.skinTypeSuitable.join(', ')
    });
    setShowModal(true);
  };

  const handleDelete = (id) => dispatch(deleteProduct(id));

  // تطبيق الفلترة
  const filteredProducts = products.filter(p => 
    (filterDescription ? p.description === filterDescription : true) &&
    (filterSkin ? p.skinTypeSuitable.includes(filterSkin) : true)
  );

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Products</h2>

      {/* أزرار الفلترة */}
      <div className="d-flex justify-content-between mb-3">
        <div>
          <Form.Select onChange={(e) => setFilterDescription(e.target.value)} value={filterDescription}>
            <option value="">All Types</option>
            <option value="mask">Mask</option>
            <option value="cleanser">Cleanser</option>
            <option value="moisturizer">Moisturizer</option>
            <option value="sunblock">Sunblock</option>
            <option value="serum">Serum</option>
          </Form.Select>
        </div>
        <div>
          <Form.Select onChange={(e) => setFilterSkin(e.target.value)} value={filterSkin}>
            <option value="">All Skin Types</option>
            <option value="dry">Dry</option>
            <option value="oily">Oily</option>
            <option value="normal">Normal</option>
            <option value="sensitive">Sensitive</option>
            <option value="combination">Combination</option>
            <option value="acne-prone">Acne-prone</option>
            <option value="mature">Mature</option>
            <option value="all">All</option>
          </Form.Select>
        </div>
        <Button onClick={() => setShowModal(true)}>Add Product</Button>
      </div>

      <div className="row g-4">
        {filteredProducts.map(p => (
          <div className="col-md-4" key={p.id}>
            <div className="card h-100">
              <img src={p.image} className="card-img-top" alt={p.name} />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description} - {p.brand}</p>
                <p className="card-text">Price: ${p.price}</p>
                <p className="card-text">Ingredients: {p.ingredients.join(', ')}</p>
                <p className="card-text">Skin Type: {p.skinTypeSuitable.join(', ')}</p>
                <Button variant="warning" className="me-2" onClick={() => handleEdit(p)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(p.id)}>Delete</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      <Modal show={showModal} onHide={() => { setShowModal(false); setEditingProduct(null); }}>
        <Modal.Header closeButton>
          <Modal.Title>{editingProduct ? 'Edit Product' : 'Add Product'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {['name','brand','type','description','ingredients','price','skinTypeSuitable','image'].map(field => (
              <Form.Group className="mb-3" key={field}>
                <Form.Label>{field}</Form.Label>
                <Form.Control
                  type={field === 'price' ? 'number' : 'text'}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                />
              </Form.Group>
            ))}
            <Button type="submit">{editingProduct ? 'Update' : 'Add'}</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Products;