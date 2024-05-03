import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  Box,
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonText,
  Center,
  CheckCircleIcon,
  CloseIcon,
  Heading,
  HStack,
  Icon,
  Text,
  TrashIcon,
} from "@gluestack-ui/themed";
import React from "react";
import { IDomainPacientList } from "../domain/models/pacient.domain.model";
interface IProps {
  item: IDomainPacientList;
  imgSVG: any;
  deleteDate: any;
}
export default function Date(props: IProps) {
  const deletePacient = (item: IDomainPacientList) => {
    props.deleteDate(item.id);
    alert("Cita del paciente: " + item.pacient_name + " eliminada");
    
  };
  return (
    <Box
      flexDirection="column"
      borderWidth={1}
      borderColor="$borderDark700"
      backgroundColor="$backgroundDark900"
      $web-flex={1}
      m="$2"
      p="$4"
      rounded="$md"
    >
      <Box alignItems="center" display="flex" flexDirection="row">
        <Text>{props.imgSVG()}</Text>
        <Text fontSize={22} color="$white" fontWeight="500" ml="$2">
          {props.item.pacient_name}
        </Text>
      </Box>
      <Text color="$textDark400" mt="$2">
        {props.item.owner}
      </Text>
      <Text color="$textDark400" mt="$2">
        {props.item.symptoms}
      </Text>
      <Button
        onPress={() => deletePacient(props.item)}
        size="lg"
        variant="outline"
        action="negative"
        mt="$4"
      >
        <ButtonIcon as={TrashIcon} />
        <ButtonText> Eliminar</ButtonText>
      </Button>
    </Box>
  );
}
