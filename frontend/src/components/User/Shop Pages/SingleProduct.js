import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Shop.css";
import Footer from "../Header & Footer/Footer";
import Navbar from "../Header & Footer/Navbar";
import "../Header & Footer/Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import axios from "axios";
import Featureproduct from "../Home Pages/Featureproduct";
import Logo from './logo.png'
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { FiUser } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useAuth } from '../../../context/auth'
import { useCart } from '../../../context/cart'
import { Badge } from 'antd';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Star from "./Star";
import Currency from "../Helper/Currency";
import Scroll from "../Home Pages/Scroll";
import {url} from '../../../API/api'

const SingleProduct = ({ products }) => {

  const [data, setdata] = useState([]);
  const user_id = localStorage.getItem('userId')

  const dataload = async () => {
    await axios.get(`${url}/auth/get-add-to-cart/` + user_id)
      .then((res) => {
        setdata(res.data.cart_data)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    dataload();
  }, [])

  const Add_to_cart = (id) => {

    let user_id = localStorage.getItem('userId');

    if (!user_id) {
      toast.error("Pls Login Account", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const oldcart = JSON.parse(localStorage.getItem('cart old id')) || [];
      oldcart.push(id);
      localStorage.setItem('cart old id', JSON.stringify(oldcart));
      toast.success("Add Item", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      const Newdata = {
        user_id: user_id,
        Data: oldcart,
      }
      axios.post(`${url}/auth/add-to-cart`, { Newdata: Newdata })
    }
  }



  const [Mobile, setMobile] = useState(false);

  const [auth, setauth] = useAuth();
  const [cart, setCart] = useCart();

  const handleLogout = () => {
    setauth({
      ...auth,
      user: null,
      token: "",
      userID: "",
    });
    localStorage.removeItem("auth");
    // localStorage.removeItem("auth");
    toast.success("Logout");
  };

  const [anchorElUser, setAnchorElUser] = useState();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { id } = useParams();
  const [Data, setData] = useState({
    product_name: '',
    product_price: '',
    product_description: '',
    product_discount: '',
    product_reviews: '',
    product_image: '',
    id: ''
  });

  const viewSingleproduct = async () => {
    const result = await axios.get(`${url}/product/view-single-product/` + id);
    // console.log(result.data);
    setData(result.data);
  };
  useEffect(() => {
    viewSingleproduct();
  }, []);

  return (
    <>
      {/*  Start Navbar */}

      <ToastContainer />
      <nav className="navbar">
        <h3 className="logo">
          {/* <img src="./logo.png" /> */}
          <img src={Logo} />
        </h3>

        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/" className="home">
            <li>Home</li>
          </Link>
          <Link to="/shop" className="home">
            <li>Shop</li>
          </Link>
          <Link to="/media" className="about">
            <li>Media</li>
          </Link>
          <Link to="/blog" className="about">
            <li>Blog</li>
          </Link>
          <Link to="/contact" className="services">
            <li>Contact</li>
          </Link>

          {!auth?.user ? (
            <>
              <Link to="/login" className="services">
                <li>Login</li>
              </Link>
              <Link to="/register" className="services">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <>
              <Link>
                <li>
                  <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Profile">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <i style={{ color: '#fff', fontSize: '30px' }}><FiUser /></i>

                        {/* <Avatar
                          alt="Remy Sharp"
                          src="/static/imagess/avatar/2.jpg"
                        /> */}
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: "45px" }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <ul style={{ padding: "2px" }}>
                        <Link style={{ color: "#000" }} to='/order'>
                          <li
                            style={{
                              textAlign: "center",
                              cursor: "pointer",
                              width: "100px",
                            }}
                          >
                            {" "}
                            My Order{" "}
                          </li>
                        </Link>

                        {auth?.user?.role === 1 ? (
                          <>

                            <Link
                              onClick={handleLogout}
                              to="/"
                              style={{ color: "#000" }}
                            >
                              <li
                                style={{
                                  textAlign: "center",
                                  cursor: "pointer",
                                  width: "100px",
                                }}
                              >
                                {" "}
                                Logout{" "}
                              </li>
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link
                              onClick={handleLogout}
                              to="/"
                              style={{ color: "#000" }}
                            >
                              <li
                                style={{
                                  textAlign: "center",
                                  cursor: "pointer",
                                  width: "100px",
                                }}
                              >
                                Logout
                              </li>
                            </Link>
                          </>
                        )}
                      </ul>
                    </Menu>
                  </Box>
                </li>
              </Link>
            </>
          )}
          <Link to='/cart'>
            <Badge style={{ marginRight: '30px', minWidth: '14px', height: '14px', fontSize: '12px', lineHeight: '13px', marginTop: '15px' }} status="success" count={data?.length} showZero>
              <li><i style={{ color: '#fff', fontSize: '30px', padding: '0px' }}>
                <AiOutlineShoppingCart />
              </i>
              </li>
            </Badge>
          </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-5 product-single-img">
            {/* <img src={Data.product_image} alt="" /> */}
            <img src={`/images/product/${Data.product_image}`} alt="" />
          </div>
          <div className="col-7 product-single-body">
            <h2>{Data.product_name}</h2>
            <hr />
            <p>
              <Currency product_price={Data.product_price} /> <del>$29000</del>
            </p>
            <Star product_reviews={Data.product_reviews} />
            {/* <p>{Data.product_reviews}</p> */}
            <br />
            <p>
              {Data.product_description}</p>
            <hr />
            <div class="shop-info">
              <ul>
                <li>
                  <img
                    className="alignnone size-full wp-image-6481 entered lazyloaded"
                    src="https://auriane.jwsuperthemes.com/wp-content/uploads/2022/03/package.svg"
                    alt
                    width={20}
                    height={20}
                    data-lazy-src="https://auriane.jwsuperthemes.com/wp-content/uploads/2022/03/package.svg"
                    data-ll-status="loaded"
                  />
                  Free returns
                </li>
                <li>
                  <img
                    className="alignnone size-full wp-image-6480 entered lazyloaded"
                    src="https://auriane.jwsuperthemes.com/wp-content/uploads/2022/03/truck.svg"
                    alt
                    width={20}
                    height={20}
                    data-lazy-src="https://auriane.jwsuperthemes.com/wp-content/uploads/2022/03/truck.svg"
                    data-ll-status="loaded"
                  />
                  Free shipping via DHL, fully insured
                </li>
                <li>
                  <img
                    className="alignnone size-full wp-image-6479 entered lazyloaded"
                    src="https://auriane.jwsuperthemes.com/wp-content/uploads/2022/03/check_circle.svg"
                    alt
                    width={20}
                    height={20}
                    data-lazy-src="https://auriane.jwsuperthemes.com/wp-content/uploads/2022/03/check_circle.svg"
                    data-ll-status="loaded"
                  />
                  All taxes and customs duties included
                </li>
              </ul>
            </div>
            <hr />
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <Link style={{ color: '#fff' }} to='/buynow'>
                  <button type="button" class="product-single-btn">
                    Buy Now
                  </button>
                </Link>
                <button type="button" class="product-single-btn-cart"

                  onClick={() => { Add_to_cart(Data._id) }}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Scroll />
      <Featureproduct />
      <Footer />
    </>
  );
};

export default SingleProduct;
