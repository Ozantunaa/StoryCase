### Instagram Story Uygulaması Kurulumu
Aşağıdaki adımları takip ederek Story React Native uygulamasının nasıl kurulacağını öğrenebilirsiniz.

<img src="https://user-images.githubusercontent.com/105156986/225743499-1333ee23-e1e9-49b5-aa33-c79c36c9d9e3.gif" width="250" height="500"/>

### Ön Gereksinimler
- Node.js (sürüm 12 veya üstü)
- Yarn veya npm (sürüm 6 veya üstü)
- Xcode (sadece iOS için)

### Kurulum
1. Bu repository'yi klonlayın:

```
git clone https://github.com/Ozantunaa/StoryCase.git
cd StoryCase
```

2. Gerekli bağımlılıkları yükleyin:
- ```yarn install```veya ```npm install```

3. iOS için, projeyi açın ve Xcode'da derleyin:
```
cd ios
pod install
cd ..
react-native run-ios
```
4. Android için:

```
react-native run-android
```
