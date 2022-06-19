import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import style from "./Product.module.scss"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DetailProductType, SizeType } from "../../common/commonTypes";
import productSlice from "../../store/reducers/productReduxer";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

interface IFormInput {
    size: string;
    number: number
}

interface PropsType {
    product: DetailProductType
    sizes: SizeType[]
}

export default function FormAddProduct(props: PropsType) {
    const { register, handleSubmit, formState: { isDirty, isValid }  } = useForm<IFormInput>({
        mode: "onChange"
      });

      const dispatch = useAppDispatch()

      const {cart} = useAppSelector(state => state.product)
    

    const [number, setnumber] = useState(1)

    const onSubmit: SubmitHandler<IFormInput> = data => {
        dispatch(productSlice.actions.addToCart({number: number, product: props.product, size: data.size}))
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.select}>
                <label>Размеры в наличии</label>
                <select {...register("size")} >
                    <option></option>
                    {props.sizes.map(i => i.avalible && <option key={i.size} value={i.size}>{i.size}</option>)}
                </select>
            </div>
            <div className={style.number}>
                <label>Колличество</label>
                <RemoveIcon onClick={() => setnumber(number - 1)} style={{ backgroundColor: "#5a6268", color: "#fff" }} />
                <input readOnly value={number} {...register("number")} />
                <AddIcon onClick={() => setnumber(number + 1)} style={{ backgroundColor: "#5a6268", color: "#fff" }} />
            </div>
            <button className={(!isDirty || !isValid) ? style.disabled_button : style.button} disabled={!isDirty || !isValid} type="submit">В корзину</button>
        </form>
    );
}
