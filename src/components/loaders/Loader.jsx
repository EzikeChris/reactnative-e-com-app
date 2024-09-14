import {ActivityIndicator, Modal, StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {COLORS, LOADER_COLORS} from '../../constants/colors';
import {useColorScheme} from 'nativewind';

const Loader = ({visible = false}) => {
  const {colorScheme} = useColorScheme();

  const indicatorColor = useMemo(
    () => (colorScheme == 'dark' ? COLORS.PRIMARY_WHITE : COLORS.PRIMARY_BLACK),
    [colorScheme],
  );
  return (
    <Modal transparent visible={visible}>
      <View
        className="flex-1 items-center justify-center"
        style={styles.backDrop}>
        <ActivityIndicator color={indicatorColor} />
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  backDrop: {
    backgroundColor: LOADER_COLORS.BACKGROUND,
  },
});
