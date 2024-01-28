import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import {
  Background,
  BackgroundTanks,
  ButtonOptions,
  CenterImage,
  CenterImageTanks,
  ErrorMessage,
  Form,
  FormContainer,
  Input,
  InputContainer,
  Label,
  Link,
  Options,
  OptionsContainer,
  TextArea,
  Title,
  ToSend,
  Video,
  VideoContainer,
} from "./style";
import { Loading } from "../../components/loading/Loading";

type Option = string;

export const ContactMe: React.FC = () => {
  const contact = require("../../assets/contacto.mp4");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [state, handleSubmit] = useForm("mzbnzevz");
  const [inputFocus, setInputFocus] = useState<{ [key: string]: boolean }>({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  // Options for the dropdown menu
  const options: Option[] = [
    "Assunto*",
    "Vender",
    "Comprar",
    "Arrendar",
    "Outros",
  ];

  const tanks = require("../../assets/tanks.jpg");

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle option selection
  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
    if (errorMessages["Assunto"]) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        Assunto: null,
      }));
    }
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  const handleInputFocus = (inputName: string) => {
    setInputFocus({ ...inputFocus, [inputName]: true });
  };

  const handleInputBlur = (inputName: string) => {
    setInputFocus({ ...inputFocus, [inputName]: Boolean(state[inputName]) });
  };

  const [errorMessages, setErrorMessages] = useState<{
    [key: string]: string | null;
  }>({
    name: null,
    email: null,
  });

  const displayErrorMessage = (fieldName: string, message: string) => {
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [fieldName]: message,
    }));

    console.log(errorMessages);
  };

  const [states, setState] = useState({
    name: "",
    email: "",
    // outros campos do formulário
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Se o campo já tinha uma mensagem de erro, limpe-a
    if (errorMessages[name]) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verifique campos obrigatórios
    const requiFields = ["name", "email"];
    let hasErrors = false;

    requiFields.forEach((field) => {
      if (!states[field] || states[field] === "") {
        displayErrorMessage(field, `Preenchimento obrigatório.`);
        hasErrors = true;
        console.log(states);
      }
    });

    if (!selectedOption || selectedOption === "Assunto*") {
      displayErrorMessage("Assunto", "Por favor, selecione um assunto.");
      hasErrors = true;
    }

    if (hasErrors) {
      console.log("......");
      return;
    }

    // Restante do código se não houver erros
    await handleSubmit(e);
  };

  if (state.succeeded) {
    return (
      <BackgroundTanks>
        <h1>Obrigado!</h1>
        <Title>Entraremos em contato o mais breve possível.</Title>
        <CenterImageTanks>
          <img src={tanks} alt="Obrigada" />
        </CenterImageTanks>
        <Link to="/">Voltar ao início</Link>
      </BackgroundTanks>
    );
  }
  return (
    <Background>
      {state.submitting && (
        <div>
          <Loading />
        </div>
      )}

      {!state.submitting && (
        <div>
          {" "}
          <h1>Estou à sua espera</h1>
          <Form onSubmit={handleFormSubmit}>
            <CenterImage>
              <FormContainer>
                <InputContainer>
                  <ButtonOptions
                    id="options"
                    isopen={isOpen}
                    onClick={toggleDropdown}
                    haserror={Boolean(errorMessages["Assunto"])}
                  >
                    {selectedOption ? `${selectedOption}` : "Assunto *"}
                    {isOpen ? (
                      <ExpandLessIcon
                        style={{
                          fontSize: "50px",
                        }}
                      />
                    ) : (
                      <ExpandMoreIcon
                        style={{
                          fontSize: "50px",
                        }}
                      />
                    )}
                  </ButtonOptions>
                  {errorMessages["Assunto"] && (
                    <ErrorMessage>{errorMessages["Assunto"]}</ErrorMessage>
                  )}
                  {isOpen && (
                    <OptionsContainer
                      haserror={Boolean(errorMessages["Assunto"])}
                    >
                      {options.map((option) => (
                        <Options
                          value={option}
                          key={option}
                          onClick={() => handleOptionSelect(option)}
                        >
                          {option}
                        </Options>
                      ))}
                    </OptionsContainer>
                  )}
                </InputContainer>{" "}
                <InputContainer>
                  <Input
                    type="name"
                    id="name"
                    name="name"
                    onFocus={() => handleInputFocus("name")}
                    onBlur={() => handleInputBlur("name")}
                    hasfocus={inputFocus["name"]}
                    placeholder="Nome *"
                    onChange={handleInputChange}
                    haserror={Boolean(errorMessages["name"])}
                  />
                  <Label htmlFor="name" hasfocus={inputFocus["name"]}>
                    Nome
                  </Label>
                  <ValidationError
                    prefix="Nome"
                    field="name"
                    errors={state.errors}
                  />
                  {errorMessages["name"] && (
                    <ErrorMessage>{errorMessages["name"]}</ErrorMessage>
                  )}
                  <ValidationError
                    prefix="Nome"
                    field="name"
                    errors={state.errors}
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    onFocus={() => handleInputFocus("email")}
                    onBlur={() => handleInputBlur("email")}
                    hasfocus={inputFocus["email"]}
                    placeholder="Email *"
                    onChange={handleInputChange}
                    haserror={Boolean(errorMessages["email"])}
                  />
                  <Label htmlFor="email" hasfocus={inputFocus["email"]}>
                    Email
                  </Label>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                  {errorMessages["email"] && (
                    <ErrorMessage>{errorMessages["email"]}</ErrorMessage>
                  )}
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </InputContainer>
                <InputContainer>
                  <Input
                    type="phone"
                    name="phone"
                    id="phone"
                    onFocus={() => handleInputFocus("phone")}
                    onBlur={() => handleInputBlur("phone")}
                    hasfocus={inputFocus["phone"]}
                    placeholder="Telemóvel"
                  />
                  <Label htmlFor="phone" hasfocus={inputFocus["phone"]}>
                    Telemóvel
                  </Label>
                  <ValidationError
                    prefix="Telemóvel"
                    field="phone"
                    errors={state.errors}
                  />
                </InputContainer>
                <InputContainer>
                  <TextArea
                    id="message"
                    name="message"
                    onFocus={() => handleInputFocus("message")}
                    onBlur={() => handleInputBlur("message")}
                    hasfocus={inputFocus["message"]}
                    placeholder="Escreva a sua mensagem"
                  />
                  <Label htmlFor="message" hasfocus={inputFocus["message"]}>
                    Escreva a sua mensagem
                  </Label>
                  <ValidationError
                    prefix="Mensagem"
                    field="message"
                    errors={state.errors}
                  />
                </InputContainer>
                <ToSend type="submit" disabled={state.submitting}>
                  Enviar
                </ToSend>
              </FormContainer>
              <VideoContainer>
                <Video controls autoPlay playsInline loop muted>
                  <source src={contact} type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </Video>
              </VideoContainer>
            </CenterImage>{" "}
          </Form>
        </div>
      )}
    </Background>
  );
};
