import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button, { ButtonProps } from "@mui/material/Button";
import stylesGlobal from "../../page.module.css";
import { StepContent, Typography } from "@mui/material";
import styles from "./Timeline.module.css";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const steps = [
  {
    label: "1994",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis cinelit, sed do eiusmod tempor incididunt labore et dolore ali. Lorem ipsum dolor sit amet, consectetur adipis cingelit, sed do eiusmod tempor incidi. dunt u labore et dolore magna aliqua. Ut enim ad minim. veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipis",
  },
  {
    label: "2000",
    description:
      "Dolore ali. Lorem ipsum dolor sit amet, consectetur adipis cingelit, sed do eiusmod tempor incidi. dunt u labore et dolore magna aliqua. Ut enim ad minim. veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipis",
  },
  {
    label: "2007",
    description:
      "Sum dolor sit amet, consectetur adipis cingelit, sed do eiusmod tempor incidi. dunt u labore et dolore magna aliqua. Ut enim ad minim. veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipis",
  },
  {
    label: "2010",
    description:
      "Loreiusmod tempor incididunt labore et dolore ali. Lorem ipsum dolor sit amet, consectetur adipis cingelit, sed do eiusmod tempor incidi. dunt u labore et dolore magna aliqua. Ut enim ad minim. veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipis",
  },
  {
    label: "2019",
    description:
      "Ali. Lorem ipsum dolor sit amet, consectetur adipis cingelit, sed do eiusmod tempor incidi. dunt u labore et dolore magna aliqua. Ut enim ad minim. veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipis",
  },
  {
    label: "2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipis cinelit, sed do eiusmod tempor incididunt labore et dolore ali. Lorem ipsum dolor sit amet, consectetur adipis cingelit, sed do eiusmod tempor incidi. dunt u labore et dolore magna aliqua. Ut enim ad minim. veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipis",
  },
];
const useStyles = makeStyles(() => ({
  root: {
    "& .MuiStepIcon-root": { color: "grey" },
    "& .Mui-active": { color: "var(--pink)" },
    "& .Mui-completed": { color: "var(--pink)" },
  },
}));

const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: "var(--pink)",
  border: "2px solid var(--pink)",
  borderRadius: "50px",
  padding: " 10px",
  "&:hover": {
    backgroundColor: "var(--pink)",
    color: "white",
  },
}));

const ColorTextButton = styled(Button)<ButtonProps>(() => ({
  color: "var(--pink)",
  borderRadius: "50px",
  padding: " 10px",

  "&:hover": {
    borderRadius: "50px",
    padding: " 10px",
    backgroundColor: "var(--pink)",
    color: "white",
  },
}));

const PinkConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "var(--pink)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "var(--pink)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
  },
}));

const Timeline = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const c = useStyles();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newCompleted = completed;

    newCompleted[activeStep] = true;

    setCompleted(newCompleted);

    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;

    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted([]);
  };

  return (
    <div
      className={`${stylesGlobal.sectionSpace} ${stylesGlobal.divFlexColumn}`}
    >
      <div className={styles.timelineDesktop}>
        <Stepper
          nonLinear
          activeStep={activeStep}
          alternativeLabel
          connector={<PinkConnector />}
        >
          {steps.map((step, index) => (
            <Step key={step.label} completed={completed[index]}>
              <StepButton onClick={handleStep(index)} className={c.root}>
                {step.label}
              </StepButton>
              <StepContent
                style={{ border: "none" }}
                transitionDuration={0}
              ></StepContent>
            </Step>
          ))}
        </Stepper>
        <div>
          <div className={styles.stepContent}>
            <p>{steps[activeStep].description}</p>
          </div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <ColorTextButton
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Volte na história
            </ColorTextButton>
            <Box sx={{ flex: "1 1 auto" }} />
            <ColorButton
              onClick={isLastStep() ? handleReset : handleNext}
              sx={{ mr: 1 }}
            >
              {isLastStep() ? "Comece de novo" : "Saiba mais"}
            </ColorButton>
          </Box>
        </div>
      </div>

      <div className={styles.timelineMobile}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepButton onClick={handleStep(index)} className={c.root}>
                {step.label}
              </StepButton>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <ColorButton
                      onClick={isLastStep() ? handleReset : handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {isLastStep() ? "Comece de novo" : "Saiba mais"}
                    </ColorButton>
                    <ColorTextButton
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Volte na história
                    </ColorTextButton>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </div>
    </div>
  );
};

export default Timeline;
