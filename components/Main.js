import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList, Modal } from "react-native";
import { gStyle } from "../styles/style";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Form from './Form';
import RenderItem from './RenderItem';

const initialState = [
  {name: 'Заголовок новости 1', anons: 'Анонс новости 1', full: 'Полное описание новости 1', key: '1', img: 'https://yandex-images.clstorage.net/9M7ss3q73/cb8f485p/hkeh-6l7wsfgFl4LkW9b9CJOOBL34qO8keJIJulW0ejhki6S_m77cWC0ik3rKP-0xYHD1FP0qj26ErPNjJR_2PMTlL-dunMjELZOC6G_ykSyPoiSB2Li_OHHzVdcw2C4Edavwm74bYYStrz_DZp9pgIAc9HWlK75HkalrmxAO6xEhoDbq_vRcKAET0xAXyomoY79UCaBNe6EMbogr-FzXvNFTnT7qO0WoGcfr746fOcyAWFglufOD041dQ7qExnvNgbyihj6MtPD1I3tEC-qRKNc7gBEsNX-J0Cp4yxQoxySFh_1iPstR3Ek7l-Nqr8GY6FzA9bG7g_MZXT_SmO4fnSV4tpo-bPjYLQvDaC-6DZxvMyiZaBkPyaCKvOdw1FMstcPZKsInDQiVL-vT8ns5LGxYZEEpA9cbdeGT_qyWRxl9uD5qnphw2OG744hXnvFUI3N0DfxpfzlYvpRDdFCnCIVPpa7Kc6lg_auP13ZveRQ0bEzBeffHS2G902qcIp-dtfjaIhr8wFSFX1vo27rdAMND6FVEocfVNH4sezikPzCha3U2kndNqD1_m7-a2yEQ6Gi0bSlzex91xaOmtJ4v-bUgql4eCFDkHct_AHN6iYgDZ5RdVCWDBUjuLHP4rPtgyYs5vsavCWg9Q5_X9hOtBPg0rB1paxPXUakDYtDSa0FRYO5yPhg85Akrrwhn5hlIY_9c4fRhj5HYfljzANC3gG0HGeoSu_UgeX8L07L7KTyIEER9redzO-WpL0YkWgeVjahWbtLwqPytx0eE606tkNunbCHA6ceZuCqAY5z4_whZ-6X6oq-hlBG_F--C23EQvFw0UT2fC-9haQOGVIa7ZcXoJgoSEKAM7VcP_JtiwdizeyzRPC2HmbSGtPeMfGNEKQtR_qYz0cQZKx_3cjcxiIgY4Pn1uxvvBfUD4oyKI_2ZCN7yTiikoNkD72A7woE0E9Og2dQpf6m8LgDT7ERI'},
  {name: 'Заголовок новости 2', anons: 'Анонс новости 1', full: 'Полное описание новости 2', key: '2', img: 'https://yandex-images.clstorage.net/9M7ss3q73/cb8f485p/hkeh-6l7wsfgFl4LkW9b9CJOOBL34qO8keJIJumD1I2Rlz6Szp6uQXXBqpjLLYrhFeHDoXaxjzi6YmZonJRfmPNj9G-tunMjELZOC6G_ykSyPoiSB2Li_OHHzVdcw2C4Edavwm74bYYStrz_DZp9pgIAc9HWlK75HkalrmxAO6xEhoDbq_vRcKAET0xAXyomoY79UCaBNe6EMbogr-FzXvNFTnT7qO0WoGcfr746fOcyAWFglufOD041dQ7qExnvNgbyihj6MtPD1I3tEC-qRKNc7gBEsNX-J0Cp4yxQoxySFh_1iPstR3Ek7l-Nqr8GY6FzA9bG7g_MZXT_SmO4fnSV4tpo-bPjYLQvDaC-6DZxvMyiZaBkPyaCKvOdw1FMstcPZKsInDQiVL-vT8ns5LGxYZEEpA9cbdeGT_qyWRxl9uD5qnphw2OG744hXnvFUI3N0DfxpfzlYvpRDdFCnCIVPpa7Kc6lg_auP13ZveRQ0bEzBeffHS2G902qcIp-dtfjaIhr8wFSFX1vo27rdAMND6FVEocfVNH4sezikPzCha3U2kndNqD1_m7-a2yEQ6Gi0bSlzex91xaOmtJ4v-bUgql4eCFDkHct_AHN6iYgDZ5RdVCWDBUjuLHP4rPtgyYs5vsavCWg9Q5_X9hOtBPg0rB1paxPXUakDYtDSa0FRYO5yPhg85Akrrwhn5hlIY_9c4fRhj5HYfljzANC3gG0HGeoSu_UgeX8L07L7KTyIEER9redzO-WpL0YkWgeVjahWbtLwqPytx0eE606tkNunbCHA6ceZuCqAY5z4_whZ-6X6oq-hlBG_F--C23EQvFw0UT2fC-9haQOGVIa7ZcXoJgoSEKAM7VcP_JtiwdizeyzRPC2HmbSGtPeMfGNEKQtR_qYz0cQZKx_3cjcxiIgY4Pn1uxvvBfUD4oyKI_2ZCN7yTiikoNkD72A7woE0E9Og2dQpf6m8LgDT7ERI'},
  {name: 'Заголовок новости 3', anons: 'Анонс новости 1', full: 'Полное описание новости 3', key: '3', img: 'https://avatars.mds.yandex.net/i?id=6164e54abe6918dfc9193bf79cfd3c20-5616646-images-thumbs&n=13&exp=1'},
];

const renderItem = ({ item } ) => {
  return (
  <RenderItem item={item} />
  )
};

export default function Main() {

  const [news, setNews] = useState(initialState);
  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [
        article,
        ...list
      ]
    });
    setModalWindow(false);
  }

    return (
      <View style={gStyle.main}>
        <Modal visible={modalWindow}>
          <View style={gStyle.main}>
            <MaterialCommunityIcons name="progress-close" size={34} color="#e091e0" style={styles.iconClose} onPress={() => setModalWindow(false)}/>
            <Text style={styles.title}>Форма добавления статей</Text>
            <Form addArticle={addArticle}/>
          </View>
        </Modal>
        <MaterialIcons name="add-chart" size={44} color="#e091e0" style={styles.iconAdd} onPress={() => setModalWindow(true)}/>
        <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
        <FlatList data={ news } renderItem={ renderItem } />
      </View>
    );
}

const styles = StyleSheet.create({
  iconClose: {
    textAlign: 'center',    
  },
  iconAdd: {
    textAlign: 'center',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
  },
  header: {
    marginBottom: 30,
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747',
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747',
  }
});
