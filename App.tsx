import { config } from "@gluestack-ui/config";
import {
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  FlatList,
  FormControlHelper,
  FormControlHelperText,
  GluestackUIProvider,
  InputField,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  Text,
} from "@gluestack-ui/themed";
import { ScrollView, StyleSheet } from "react-native";
import Gradient from "./assets/Icons/Gradient";
import DocumentData from "./assets/Icons/DocumentData";
import LightBulbPerson from "./assets/Icons/LightbulbPerson";
import Rocket from "./assets/Icons/Rocket";
import Logo from "./assets/Icons/Logo";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
} from "@gluestack-ui/themed";
import { IDomainPacientList } from "./domain/models/pacient.domain.model";
import { useState } from "react";
import Date from "./components/Date";
import FormPacient from "./components/FormPacient";
import { AddIcon } from "@gluestack-ui/themed";
export default function App() {
  const [showModal, setShowModal] = useState(false);
  //#region states
  const datesList: IDomainPacientList[] = [
    {
      id: "1",
      pacient_name: "Juan Perez",
      owner: "ITSJAPON",
      symptoms: "No presenta sintomas",
    },
    {
      id: "2",
      pacient_name: "Naim Mesias",
      owner: "HOML",
      symptoms: "No presenta sintomas",
    },
    {
      id: "3",
      pacient_name: "Joseph Mino",
      owner: "ITSJAPON",
      symptoms: "No presenta sintomas",
    },
  ];
  const [dates, setDates] = useState(datesList);
  const deleteDates = (id: string) => {
    setDates((actualDates) => {
      return actualDates.filter((item) => item.id !== id);
    });
  };
  return (
    <GluestackUIProvider config={config}>
      <Box flex={1} backgroundColor="$black">
        <ScrollView
          style={{ height: "100%" }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <Box
            position="absolute"
            $base-h={500}
            $base-w={500}
            $lg-h={700}
            $lg-w={700}
          >
            <Gradient />
          </Box>
          <Box
            height="60%"
            $base-my="$16"
            $base-mx="$5"
            $base-h="80%"
            $lg-my="$24"
            $lg-mx="$32"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box justifyContent="center" alignItems="center">
              <Text color="$white" fontWeight="$medium" ml="$2" size="2xl">
                Agendamiento de Citas
              </Text>
            </Box>
            <Button
              mt="$3"
              py="$2.5"
              px="$3"
              bg="$darkBlue600"
              onPress={() => {
                setShowModal(true);
              }}
            >
              <ButtonIcon as={AddIcon} />
              <ButtonText>Registrar Nuevo Paciente</ButtonText>
            </Button>
            <Modal
              isOpen={showModal}
              onClose={() => {
                setShowModal(false);
              }}
            >
              <ModalBackdrop />
              <ModalContent>
                <ModalBody>
                  <FormPacient />
                </ModalBody>
              </ModalContent>
            </Modal>
            <Box $base-flexDirection="column" $md-flexDirection="row" mt="$8">
              {dates.map((item) => (
                <Date
                  deleteDate={deleteDates}
                  item={item as IDomainPacientList}
                  imgSVG={DocumentData}
                  key={item.id}
                />
              ))}
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </GluestackUIProvider>
  );
}

const style = StyleSheet.create({
  labels: {
    color: "#fff",
  },
});
