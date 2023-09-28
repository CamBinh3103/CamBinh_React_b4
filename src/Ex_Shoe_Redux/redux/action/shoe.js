import { BUY_SHOE } from "../constant/shoe"

export let buyShoeAction=(shoe)=>{
    return {
        type: BUY_SHOE,
        payload: shoe,
    }
}
export let changeQuantityAction = (id, option) => {
    return {
        type:"CHANGE_QUANTITY",
        payload:{
            id: id,
            option: option,
        }
    }
}