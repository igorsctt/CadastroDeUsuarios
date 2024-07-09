import PropTypes from 'prop-types'
import { Button } from "./styles"


//Os 3 pontinhos, se chama spread operator, pega todo o resto.
// TypeScript -> JavaScript com tipagem, o children precisa dele; tipagem let cpf: String = "4445546545"

function DefaultButton({ children, theme, ...props }){
    
    return (
        <Button {...props} theme={theme}>{children}</Button>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaultButton