import AsyncStorage from '@react-native-async-storage/async-storage';

export const CART_STORAGE_KEY = 'northstar-shopping-cart';

export async function saveCart(items) {
  // TODO 1:
  // Convert the cart array to JSON text and save it with AsyncStorage.setItem().

  const cartJSONConvert = JSON.stringify(items);

  await AsyncStorage.setItem(
    CART_STORAGE_KEY,
    cartJSONConvert
  );
}

export async function loadCart() {
  // TODO 2:
  // Read CART_STORAGE_KEY with AsyncStorage.getItem().
  // If nothing has been saved, return [].
  // If data exists, convert it back to JavaScript with JSON.parse().

  const savedCartText = await AsyncStorage.getItem(CART_STORAGE_KEY)
  

  if (savedCartText === null) {
    return [];
  }
  
  return JSON.parse(savedCartText);

}

export async function clearSavedCart() {
  // TODO 3:
  // Remove only CART_STORAGE_KEY. Do not use AsyncStorage.clear().
    await AsyncStorage.removeItem(
      CART_STORAGE_KEY
    );
  }