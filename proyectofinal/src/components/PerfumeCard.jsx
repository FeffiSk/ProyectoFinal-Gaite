import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import Swal from "sweetalert2";

const PerfumeCard = ({ perfume }) => {
  const handlePurchase = () => {
    Swal.fire({
      title: "Compra realizada!",
      text: `Gracias por comprar ${perfume.name} de ${perfume.brand}. ¡Esperamos que lo disfrutes!`,
      icon: "success",
      confirmButtonText: "Cerrar"
    });
  };

  return (
    <Card style={{ width: "300px" }}>
      <CardMedia
        component="img"
        height="140"
        image={perfume.image}
        alt={perfume.name}
      />
      <CardContent>
        <Typography variant="h5">{perfume.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {perfume.description}
        </Typography>
        <Typography variant="h6">${perfume.price}</Typography>
        <Button variant="contained" color="primary" onClick={handlePurchase}>
          Comprar
        </Button>
      </CardContent>
    </Card>
  );
};

export default PerfumeCard;