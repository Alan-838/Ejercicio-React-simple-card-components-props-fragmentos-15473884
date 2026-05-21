import "./orderSummary.css";
import OrderPlan from "./orderPlan/OrderPlan";

const OrderSummary = ({ nombre }: { nombre: string }) => {
    return (
        <div id="orderSummary">
            <div id="orderSummary-image">
                {/* Se usara una ruta absoluta, pero puede tener problemas a futuro */}
                <img src="/src/assets/images/illustration-hero.svg" alt="Imagen de Hero" />
            </div>
            <div id="orderSummary-text">
                <h3> {nombre} </h3>
                <p>
                    You can now listen to millions of songs, audiobooks and podcasts on
                    any device anywhere you like!
                </p>
                <OrderPlan price={"$59.99"} />
                <div id="orderSummary-buttons">
                    <button id="button1">Proceed to Payment</button>
                    <button id="button2">Cancel Order</button>
                </div>
                
            </div>
        </div>
    )
};

export default OrderSummary;