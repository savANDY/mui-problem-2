const cdrSection = [
  {
    text: "CDR",
    icon: "home",
    link: "/cdr",
    children: [
      {
        text: "Personas",
        icon: "account_box",
        link: "/cdr/personas"
      },
      {
        text: "Crédito Personas",
        icon: "account_balance_wallet",
        link: "/cdr/creditopersonas"
      },
      {
        text: "Créditos",
        icon: "credit_card",
        link: "/cdr/creditos"
      },
      {
        text: "Garantías",
        icon: "business",
        link: "/cdr/garantias"
      },
      {
        text: "Garantías Crédito",
        icon: "ballot",
        link: "/cdr/garantiascredito"
      },
      {
        text: "Garantías Personas",
        icon: "card_travel",
        link: "/cdr/garantiaspersona"
      }
    ]
  }
];

const menuWidth = 280;
const MenuOptions = [cdrSection];

export default MenuOptions;
export { menuWidth };
