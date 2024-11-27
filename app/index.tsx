import React from "react";
import { Button, ButtonText } from "@/components/ui/button";
import {
  Button as ButtonNew,
  ButtonText as ButtonTextNew,
} from "@/components/ui/button-new";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";
const index = () => {
  return (
    <SafeAreaView className="md:flex flex-col items-center justify-center md:w-full h-full">
      <View className="p-2 md:max-w-[440px] w-full gap-4">
        <Text className="text-typography-950">data-*</Text>
        <Button action="primary" variant="solid">
          <ButtonText>Primary Solid</ButtonText>
        </Button>
        <Button action="primary" variant="outline">
          <ButtonText>Primary Outline</ButtonText>
        </Button>
        <Button action="primary" variant="link">
          <ButtonText>Primary Link</ButtonText>
        </Button>
        <Button action="secondary" variant="solid">
          <ButtonText>Secondary solid</ButtonText>
        </Button>
        <Button action="secondary" variant="outline">
          <ButtonText>Secondary Outline</ButtonText>
        </Button>
        <Button action="secondary" variant="link">
          <ButtonText>Secondary Link</ButtonText>
        </Button>
        <Text className="text-typography-950">active: hover:</Text>
        <ButtonNew action="primary" variant="solid">
          <ButtonTextNew>Primary Solid</ButtonTextNew>
        </ButtonNew>
        <ButtonNew action="primary" variant="outline">
          <ButtonTextNew>Primary Outline</ButtonTextNew>
        </ButtonNew>
        <ButtonNew action="primary" variant="link">
          <ButtonTextNew>Primary Link</ButtonTextNew>
        </ButtonNew>
        <ButtonNew action="secondary" variant="solid">
          <ButtonTextNew>Secondary solid</ButtonTextNew>
        </ButtonNew>
        <ButtonNew action="secondary" variant="outline">
          <ButtonTextNew>Secondary Outline</ButtonTextNew>
        </ButtonNew>
        <ButtonNew action="secondary" variant="link">
          <ButtonTextNew>Secondary Link</ButtonTextNew>
        </ButtonNew>
      </View>
    </SafeAreaView>
  );
};

export default index;
