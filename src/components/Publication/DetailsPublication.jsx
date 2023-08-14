import React, {useState} from "react";
import {Pressable, Text} from "react-native";

const DetailsPublication = () => {
  const [more, setMore] = useState(false);
  const [numberOfLines, setNumberOfLines] = useState(3);

  const handleMore = () => {
    if (more) {
      setMore(false);
      setNumberOfLines(3);
    } else {
      setMore(true);
      setNumberOfLines(0);
    }
  };

  return (
    <Pressable onPress={handleMore}>
      <Text style={{fontSize: 16}} numberOfLines={numberOfLines}>
        Es un hecho establecido hace demasiado tiempo que un lector se distraerá
        con el contenido del texto de un sitio mientras que mira su diseño. El
        punto de usar Lorem Ipsum es que tiene una distribución más o menos
        normal de las letras, al contrari.punto de usar Lorem Ipsum es que tiene
        una distribución más o menos normal de las letras, al contrari.punto de
        usar Lorem Ipsum es que tiene una distribución más o menos normal de las
        letras, al contrari.punto de usar Lorem Ipsum es que tiene una
        distribución más o menos normal de las letras, al contrari.
      </Text>

      {more ? (
        <Text style={{fontWeight: "bold", marginTop: 5, fontSize: 16}}>
          View less
        </Text>
      ) : (
        <Text style={{fontWeight: "bold", marginTop: 5, fontSize: 16}}>
          View more
        </Text>
      )}
    </Pressable>
  );
};

export {DetailsPublication};
