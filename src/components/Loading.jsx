import loading_img from "../assets/loading.gif"
import { Dialog } from "./Styled-components/layoutStyles/LoadingStyles"


const Loading = () => {
    return (
        <Dialog>
            <img src={loading_img} alt="Loading" />
        </Dialog>
    )
}

export default Loading