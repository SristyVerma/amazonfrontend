import React, { useState, useContext, useEffect } from "react";
import "./Navbar.css";
import logo from "../../components/Apni_dukan_logo.png";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  List,
  ListItem,
  Divider
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { HamburgerIcon } from "@chakra-ui/icons";
import SideMenuModal from "./SideMenuModal";
import { Logincontext } from "../../context/Contextprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProducts } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  const { account, setAccount } = useContext(Logincontext);
  // console.log(account);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const navigate = useNavigate("");

  //for searh bar
  const { products } = useSelector((state) => state.getproductsdata);
  const [text, setText] = useState("");
  const [liopen, setLiopen] = useState(true);
  const getText = (text) => {
    setText(text);
    setLiopen(false);
  };
  console.log(text);

  //we are writting this just to check if user is logged in or not
  const getdetailsvaliduser = async () => {
    const res = await fetch("https://calm-ruby-beetle-fez.cyclic.app/validuser", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data = await res.json();
    console.log(data);

    if (res.status !== 201) {
      console.log("first login");
    } else {
      console.log("user is logged in");
      setAccount(data);
    }
  };
  useEffect(() => {
    getdetailsvaliduser();
  }, []);

  const logoutuser = async () => {
    const res2 = await fetch("https://calm-ruby-beetle-fez.cyclic.app/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const data2 = await res2.json();
    // console.log(data2);

    if (!res2.status === 201) {
      const error = new Error(res2.error);
      throw error;
    } else {
      setAccount(false);

      toast.success("user Logout 😃!", {
        position: "top-center",
      });
      navigate.push("/");
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="leftnav">
          <div className="hamicon" onClick={toggleModal}>
            <HamburgerIcon
              w={9}
              h={9}
              color="grey"
              backgroundColor={"#131921"}
            />
            {isModalOpen && <SideMenuModal onClose={toggleModal} />}
          </div>
          <div className="logonav">
            <Link to="/">
              <img src={logo} alt="logomissing" />
            </Link>
          </div>
          <div className="navinput">
            <input
              type="text"
              name=""
              placeholder="Search ApniDukan.in"
              onChange={(e) => getText(e.target.value)}
            />
            <div className="navsearch">
              <SearchIcon w={8} h={8} className="navsearchicon" />
            </div>
          </div>
          {text && (
            <List className="extrasearch" hidden={liopen}>
              {products
                .filter((product) =>
                  product.title.longTitle
                    .toLowerCase()
                    .includes(text.toLowerCase())
                )
                .map((product) => (
                  <ListItem >
                    <Link
                      to={`/singleproduct/${product.id}`}
                      onClick={() => setLiopen(true)}
                    >
                      {product.title.longTitle}
                    </Link>
                    <Divider/>
                  </ListItem>
                ))}
            </List>
          )}
        </div>
        <div className="rightnav">
          <div className="navsignin">
            <Link to="/login">Sign-In</Link>
          </div>

          <div className="navcart">
            <Badge colorScheme="white.900" w={"60%"} h={"80%"}>
              <Link to="/cart">
                <FaShoppingCart
                  className="carticon"
                  style={{ width: "100%", height: "100%" }}
                />
              </Link>
            </Badge>
            {account ? (
              <Link to="/cart">
                <p>{account.carts.length}</p>
              </Link>
            ) : (
              <Link to="/login">
                <p>0</p>
              </Link>
            )}
          </div>

          {account ? (
            <Menu>
              <MenuButton
                as={Button}
                bg="transparent"
                _hover={{ bg: "transparent" }}
                borderRadius={"100px"}
              >
                <Avatar
                  className="avtar2"
                  name={account.fname[0].toUpperCase()}
                  bg="#febd69"
                />
              </MenuButton>
              <MenuList>
                {account ? (
                  <MenuItem leftIcon={<FiLogOut />}>
                    <strong>Hello,</strong> {account.fname.toUpperCase()}
                  </MenuItem>
                ) : (
                  ""
                )}
                {account ? (
                  <MenuItem onClick={logoutuser}>Log Out</MenuItem>
                ) : (
                  ""
                )}
              </MenuList>
            </Menu>
          ) : (
            <Avatar className="avtar" />
          )}
        </div>
        <ToastContainer />
      </nav>
    </header>
  );
};

export default Navbar;
