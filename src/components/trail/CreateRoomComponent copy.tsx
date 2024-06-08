import { Pressable, Text, View } from "react-native";

const StartTrailButton = () => {
    return (
      <Pressable style={{
        backgroundColor: '#9BC34Aaa',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 100,
        
      }}><Text style={{fontSize: 28}}>산책 시작하기!</Text>
      </Pressable>
    );
  };
  
export default StartTrailButton;