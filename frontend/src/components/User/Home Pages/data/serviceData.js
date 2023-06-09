import { FaShippingFast } from 'react-icons/fa'
import { RiRestartLine, RiSecurePaymentLine, RiExchangeDollarLine } from 'react-icons/ri'




export const serviceData = [
    {
      icon: <FaShippingFast/>,
      title: "Free Shipping",
      subtitle: "Con compras mayores a $10000",
      background: "linear-gradient(to bottom, #ccffff 0%, #ffccff 100%)",
    },
    {
      icon: <RiRestartLine/>,
      title: "Easy Returns",
      subtitle: "Devoluciones dentro los 30 dias",
      background: "linear-gradient(to bottom, #ccffff 0%, #ffccff 100%)",

    },
    {
      icon: <RiSecurePaymentLine/>,
      title: "Secure Payment",
      subtitle: "Seguridad en tus compras",
      background: "linear-gradient(to bottom, #ccffff 0%, #ffccff 100%)",

    },
    {
      icon: <RiExchangeDollarLine/>,
      title: " Back Guarantee",
      subtitle: "Reintegros inmediatos al cancelar tu compras",
      background: "linear-gradient(to bottom, #ccffff 0%, #ffccff 100%)",

    },
  ];