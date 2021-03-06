import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { StepHeader, StepContent, StepFooter, StepsContext } from '../../components/stepbar';

const Steps = ({ routes }) => {
  const stepsContext = useContext(StepsContext);
  const { setSteps, setCurrentStep } = stepsContext;
  useEffect(() => {
    setSteps([...routes]);
    setCurrentStep(1);
  }, []);

  return (
    <View style={styles.container}>
      <StepHeader />
      <StepContent />
      <StepFooter />
    </View>
  );
};

export default Steps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});
