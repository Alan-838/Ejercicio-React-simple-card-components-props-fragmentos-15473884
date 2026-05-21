import "./orderPlan.css"

const OrderPlan = ({ price }: { price: string }) => {
    return (
        <div id="orderPlan">
            <img src="../../src/assets/images/icon-music.svg" alt="icono de musica" />
            <div id="orderPlan-text">
                <h4>Anual Plan</h4>
                <p> {price}/year</p>
            </div>
            
            <button id="orderPlan-button">Change</button>
        </div>
    )
};

export default OrderPlan;