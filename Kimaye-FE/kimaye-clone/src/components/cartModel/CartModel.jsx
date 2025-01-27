import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./cartM.module.css";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { CircularProgress } from "@mui/material";

export const CartModel = ({ setState }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [cartData, setCartData] = useState([]);
  const [Empty, setIsEmpty] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = () => {
    setIsLoading(true);
    fetch("http://localhost:8080/cart")
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data.length === 0) {
          setIsEmpty(true);
        }
        setCartData(data);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  };

  const decrementQuantity = async (id, quantity) => {
    if (quantity === 1) {
      return;
    }
    try {
      let res = await fetch("http://localhost:8080/cart", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          quantity: quantity - 1,
        }),
      });
      await res.json();
      getCartData();
    } catch (error) {
      console.log(error);
    }
  };

  const incrementQuantity = async (id, quantity) => {
    if (quantity === 5) {
      return;
    }
    try {
      let res = await fetch("http://localhost:8080/cart", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          quantity: quantity + 1,
        }),
      });
      await res.json();
      getCartData();
    } catch (error) {
      console.log(error);
    }
  };

  const total_price = cartData.reduce((acc, el) => {
    return acc + el.price * el.quantity;
  }, 0);

  return (
    <div className={styles.outerDiv}>
      <div className={styles.heading}>
        <h3>SHOPPING CART</h3>
        <p onClick={() => setState(false)}>
          close <i className="fa-solid fa-xmark"></i>
        </p>
      </div>

      {Empty && (
        <div className={styles.empty}>
          <i className="fa-solid fa-cart-arrow-down"></i>
          <p>No product in the cart</p>
          <button className={styles.Btn}>CONTINUE SHOPPING</button>
        </div>
      )}
      {!Empty && (
        <>
          {isLoading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <CircularProgress />
            </Box>
          ) : isError ? (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">Something went wrong</Alert>
            </Stack>
          ) : (
            cartData.map((el, index) => {
              const { _id, quantity } = el;

              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "1.8rem",
                    padding: "1rem",
                    gap: "1rem",
                  }}
                  key={index}
                >
                  <div>
                    <img width={60} height={60} src={el.image} alt="" />
                  </div>
                  <div style={{ textAlign: "left" }}>
                    <p>{el.title}</p>
                    <div>
                      <div className="cart_main_details">
                        <button
                          style={{
                            cursor: "pointer",
                            padding: "0.2rem 0.6rem",
                            fontSize: "1rem",
                            outline: "none",
                            border: "1px solid #e0e0e0",
                            color: "#848484",
                            backgroundColor: "#f9f9f9",
                          }}
                          onClick={() => decrementQuantity(_id, quantity)}
                        >
                          -
                        </button>
                        <span
                          style={{
                            backgroundColor: "#fff",
                            padding: "0.6rem 0.8rem",
                          }}
                        >
                          {el.quantity}
                        </span>
                        <button
                          style={{
                            cursor: "pointer",
                            padding: "0.2rem 0.6rem",
                            fontSize: "1rem",
                            outline: "none",
                            border: "1px solid #e0e0e0",
                            color: "#848484",
                            backgroundColor: "#f9f9f9",
                          }}
                          onClick={() => incrementQuantity(_id, quantity)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
          <div className={styles.subtotal}>
            <h4>SUBTOTAL:</h4>
            <h4>₹ {total_price}</h4>
          </div>
          <div className={styles.comments}>
            {total_price < 350 ? (
              <p>Spend ₹ {350 - total_price} more to reach FREE SHIPPING!</p>
            ) : (
              <p>CONGRATULATIONS! YOU'VE GOT FREE SHIPPING!</p>
            )}

            <p>No tax on fresh fruits. Free shipping above Rs. 350.</p>
          </div>
          <button
            className={styles.Btn}
            onClick={() => {
              setState(false);
              navigate("/cart");
            }}
          >
            CHECK OUT
          </button>

          <br />
          <button
            onClick={() => {
              setState(false);
              navigate("/collections/allfruits");
            }}
            className={styles.Btn}
          >
            CONTINUE SHOPPING
          </button>
        </>
      )}
    </div>
  );
};
