import { useContactApi } from "../../Contaxt/contaxt"
import { HiMenu, HiX } from "react-icons/hi";


function Menu() {
    const {isTrue,setIsTrue}=useContactApi();
    return (
        <button onClick={()=>setIsTrue(!isTrue)}>
           {isTrue? <HiMenu/>
            :
            <HiX/>
            }
        </button>
    )
}

export default Menu
