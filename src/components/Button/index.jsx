import { Button } from "./styles"


//Os 3 pontinhos, se chama spread operation, pega todo o resto.
function DefaultButton({ children, ...props }){
    
    return (
        <Button {...props}>{children}</Button>
    )
}

export default DefaultButton