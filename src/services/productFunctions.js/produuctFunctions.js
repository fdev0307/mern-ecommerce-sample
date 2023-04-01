import { useDispatch } from "react-redux";


export const handleToWish = (e, data) => {
    const dispatch = useDispatch();

    e.preventDefault();
    //setWish(wish + 1);
    // setwishh([...wishh, data]);  from recoil (dosn't correct)
    dispatch({ type: "ADD_TO_WISH", payload: data });
    dispatch({ type: "INCREMENT_WISH_COUNTER" });
    alert(`${data.name} is added to wish successfuly`);
    let btn = e.currentTarget;
    btn.setAttribute("disabled", "true");
    btn.style.color = "red";
  };
