import AvailableLocation from '@/assets/data/availableLocation';
import { UserData } from '@/src/providers/UserProvider';
import { Loc } from '@/src/types';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import { View, StyleSheet, FlatList, Pressable, Text } from 'react-native';

type TrailInfoProps = {
  selector: number;
  newtitle: string;
  before: string[];
}

export default function TrailInfo() {
  const {setloc} = UserData();
  const {selector, before1, before2} = useLocalSearchParams();
  const before1data = before1 == undefined ? "" : before1;
  const before2data = before2 == undefined ? "" : before2;
  const seltype = Number(selector);
  var newtitle;
  var data: string[] = [];

  const changeloc = (item: string) => {
    setloc(seltype, item);
    router.back();
  };

  if(seltype == 0) {
    newtitle = '도/특별시/광역시';
    for(var i = 0; i < AvailableLocation.length; i++) 
      if(!(AvailableLocation[i].city in data)) 
        data.push(AvailableLocation[i].city);
  } else if(seltype == 1) {
    newtitle = '시/군/구';
    for(var i = 0; i < AvailableLocation.length; i++) 
      if(AvailableLocation[i].city == before1data 
        && !(AvailableLocation[i].town in data)) 
        data.push(AvailableLocation[i].town);
  } else if(seltype == 2) {
    newtitle = '읍/면/동';
    for(var i = 0; i < AvailableLocation.length; i++) 
      if(AvailableLocation[i].city == before1data 
        && AvailableLocation[i].town == before2data 
        && !(AvailableLocation[i].village in data)) 
        data.push(AvailableLocation[i].village);
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        title: newtitle
      }} />
      <FlatList
      style={{
        width: '100%',
        height: '100%',
      }}
      data={data}
      renderItem={({item}) => <Pressable style={styles.componentstyle} onPress={() => {changeloc(item);}}>
        <Text style={styles.textstyle}>{item}</Text>
      </Pressable>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
  },
  componentstyle: {
    width:'100%',
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  textstyle: {
    textAlign: 'center',
    fontSize: 20,
  }
})