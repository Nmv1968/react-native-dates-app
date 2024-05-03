import { Text, View, TextInput, Alert, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {
  Button,
  ButtonIcon,
  ButtonText,
  CalendarDaysIcon,
  CheckIcon,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Input,
  InputField,
  TextareaInput,
} from "@gluestack-ui/themed";
import { Textarea } from "@gluestack-ui/themed";
import { useState } from "react";
import DateTimePicker from "react-native-modal-datetime-picker";

export default function FormPacient() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date: Date) => {
    const [data, time] = date.toISOString().split("T").map(String);
    const [y, m, d] = data.split("-").map(String);
    const newDate = y + "/" + m + "/" + d;
    setValue("pacient_date", newDate);
    hideDatePicker();
  };
  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      pacient_date: "",
      pacient_name: "",
      owner: "",
      symptoms: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <View>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <HStack space="md">
            <FormControl size="md" isRequired={true}>
              <FormControlLabel mb="$1" mt="$3">
                <FormControlLabelText>Fecha de cita</FormControlLabelText>
              </FormControlLabel>
              <Button
                mt="$1"
                size="sm"
                variant="solid"
                action="primary"
                onPress={showDatePicker}
                isDisabled={false}
                isFocusVisible={false}
              >
                <ButtonIcon as={CalendarDaysIcon} />
                <ButtonText> Escoger Fecha</ButtonText>
              </Button>
              <DateTimePicker
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              ></DateTimePicker>
            </FormControl>
          </HStack>
        )}
        name="pacient_date"
      />
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl size="md" isRequired={true}>
            <FormControlLabel mb="$1" mt="$3">
              <FormControlLabelText>Nombre</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                placeholder="Nombre del paciente"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </Input>
          </FormControl>
        )}
        name="pacient_name"
      />
      {errors.pacient_name && <Text>Este campo es requerido.</Text>}

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl size="md" isRequired={true}>
            <FormControlLabel mb="$1" mt="$3">
              <FormControlLabelText>Propietario</FormControlLabelText>
            </FormControlLabel>
            <Input>
              <InputField
                type="text"
                placeholder="Propietario"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </Input>
          </FormControl>
        )}
        name="owner"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl size="md" isRequired={true}>
            <FormControlLabel mb="$1" mt="$3">
              <FormControlLabelText>Sintomas</FormControlLabelText>
            </FormControlLabel>
            <Textarea>
              <TextareaInput
                type="text"
                placeholder="Sintomas que presenta el paciente"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </Textarea>
          </FormControl>
        )}
        name="symptoms"
      />

      <Button
        mt="$5"
        size="md"
        variant="solid"
        action="positive"
        onPress={handleSubmit(onSubmit)}
        isDisabled={false}
        isFocusVisible={false}
      >
        <ButtonText>Registrar </ButtonText>
        <ButtonIcon as={CheckIcon} />
      </Button>
    </View>
  );
}
