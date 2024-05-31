import { TextInput, View } from 'react-native'
import React, { forwardRef } from 'react'

type ButtonProps = {
  placeholder: string;
} & React.ComponentPropsWithoutRef<typeof TextInput>;

const InputContainer = forwardRef<View | null, ButtonProps>(
  ({placeholder, ...textinputProps}, ref) => {
  return (
    <View style={{
      width: '90%',
      height: 50,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: "#eee",
      justifyContent: 'center',
      padding: 10,
      backgroundColor: "#fff",
      margin: 10,
    }}>
      <TextInput inputref={ref} style={{
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        paddingHorizontal: 20,
      }}
      {...textinputProps}
      placeholder={placeholder}
      />
    </View>
  );
});

export default InputContainer;