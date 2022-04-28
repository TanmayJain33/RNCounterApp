import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import CustomText from '../../CustomComponents/CustomText';
import CustomButton from '../../CustomComponents/CustomButton';

export default function BookStoreUIScreen() {
  const profileData = {
    name: 'Username',
    point: 200,
  };

  const bookOtherWordsForHome = {
    id: 1,
    bookName: 'Other Words For Home',
    bookCover: require('../../assets/other_words_for_home.jpg'),
    pageNo: 341,
    author: 'Jasmine Warga',
    genre: ['Romance', 'Adventure', 'Drama'],
    readed: '12k',
  };

  const bookTheMetropolis = {
    id: 2,
    bookName: 'The Metropolis',
    bookCover: require('../../assets/the_metropolist.jpg'),
    pageNo: 272,
    author: 'Seith Fried',
    genre: ['Adventure', 'Drama'],
    readed: '13k',
  };

  const bookTheTinyDragon = {
    id: 3,
    bookName: 'The Tiny Dragon',
    bookCover: require('../../assets/the_tiny_dragon.jpg'),
    pageNo: 110,
    author: 'Ana C Bouvier',
    genre: ['Drama', 'Adventure', 'Romance'],
    readed: '13k',
  };

  const myBooksData = [
    {
      ...bookOtherWordsForHome,
      completion: '75%',
      lastRead: '3d 5h',
    },
    {
      ...bookTheMetropolis,
      completion: '23%',
      lastRead: '10d 5h',
    },
    {
      ...bookTheTinyDragon,
      completion: '10%',
      lastRead: '1d 2h',
    },
  ];

  const categoriesData = [
    {
      id: 1,
      categoryName: 'Best Seller',
      books: [bookOtherWordsForHome, bookTheMetropolis, bookTheTinyDragon],
    },
    {
      id: 2,
      categoryName: 'The Latest',
      books: [bookTheMetropolis],
    },
    {
      id: 3,
      categoryName: 'Coming Soon',
      books: [bookTheTinyDragon],
    },
  ];

  const [profile, setProfile] = useState(profileData);
  const [myBooks, setMyBooks] = useState(myBooksData);
  const [categories, setCategories] = useState(categoriesData);
  const [selectedCategory, setSelectedCategory] = useState(1);

  function LineDivider() {
    return (
      <View style={{width: 1, paddingVertical: 18}}>
        <View
          style={{
            flex: 1,
            borderLeftColor: '#64676d',
            borderLeftWidth: 1,
          }}></View>
      </View>
    );
  }

  function renderHeader(profile) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingHorizontal: 24,
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <View style={{marginRight: 24}}>
            <CustomText
              title="Good Morning"
              style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}
            />
            <CustomText
              title={profile.name}
              style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}
            />
          </View>
        </View>
        <CustomButton
          height={40}
          width={150}
          btnColor="#f96d41"
          text="200 Points"
          type="filled"
          borderRadius={20}
          textColor="#fff"
          fontSize={16}
          style={{paddingLeft: 3, paddingRight: 20}}
          icon={
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 25,
                marginLeft: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.5)',
              }}>
              <Image
                source={require('../../assets/plus_icon.png')}
                resizeMode="contain"
                style={{width: 20, height: 20}}
              />
            </View>
          }
        />
      </View>
    );
  }

  function renderButtonSection() {
    return (
      <View
        style={{
          flex: 1,
          padding: 24,
          justifyContent: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            height: 70,
            backgroundColor: '#25282f',
            borderRadius: 12,
          }}>
          <CustomButton
            height={40}
            width={95}
            text="Claim"
            textColor="#fff"
            fontSize={16}
            style={{marginLeft: 10}}
            icon={
              <Image
                source={require('../../assets/claim_icon.png')}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
            }
          />
          <LineDivider />
          <CustomButton
            height={40}
            width={95}
            text="Get Point"
            textColor="#fff"
            fontSize={16}
            style={{marginLeft: 15, marginRight: 10}}
            icon={
              <Image
                source={require('../../assets/point_icon.png')}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
            }
          />
          <LineDivider />
          <CustomButton
            height={40}
            width={95}
            text="My Card"
            textColor="#fff"
            fontSize={16}
            style={{marginLeft: 15}}
            icon={
              <Image
                source={require('../../assets/card_icon.png')}
                resizeMode="contain"
                style={{width: 30, height: 30}}
              />
            }
          />
        </View>
      </View>
    );
  }

  function renderMyBookSection(myBooks) {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            paddingHorizontal: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <CustomText
            title="My Book"
            style={{color: '#fff', fontSize: 22, fontWeight: 'bold'}}
          />
          <TouchableOpacity>
            <CustomText
              title="see more"
              style={{
                color: '#64676d',
                fontSize: 16,
                textDecorationLine: 'underline',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, marginTop: 24}}>
          <FlatList
            data={myBooks}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={{
                  flex: 1,
                  marginLeft: index == 0 ? 24 : 0,
                  marginRight: 12,
                }}>
                <Image
                  source={item.bookCover}
                  resizeMode="contain"
                  style={{width: 180, height: 250, borderRadius: 20}}
                />
                <View
                  style={{
                    marginTop: 12,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../assets/clock_icon.png')}
                    style={{width: 20, height: 20, tintColor: '#64676d'}}
                  />
                  <CustomText
                    title={item.lastRead}
                    style={{marginLeft: 5, color: '#64676d', fontSize: 16}}
                  />
                  <Image
                    source={require('../../assets/page_filled_icon.png')}
                    style={{
                      marginLeft: 12,
                      width: 20,
                      height: 20,
                      tintColor: '#64676d',
                    }}
                  />
                  <CustomText
                    title={item.completion}
                    style={{marginLeft: 5, color: '#64676d', fontSize: 16}}
                  />
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => `${item.id}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }

  function renderCategoryHeader() {
    return (
      <View style={{flex: 1, paddingLeft: 24}}>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          horizontal
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                flex: 1,
                marginRight: 12,
              }}
              onPress={() => setSelectedCategory(item.id)}>
              {selectedCategory == item.id && (
                <CustomText
                  title={item.categoryName}
                  style={{fontWeight: 'bold', color: '#fff', fontSize: 22}}
                />
              )}
              {selectedCategory != item.id && (
                <CustomText
                  title={item.categoryName}
                  style={{fontWeight: 'bold', color: '#64676d', fontSize: 22}}
                />
              )}
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }

  function renderCategoryData() {
    var books = [];
    let selectedCategoryBooks = categories.filter(
      a => a.id == selectedCategory,
    );
    if (selectedCategoryBooks.length > 0) {
      books = selectedCategoryBooks[0].books;
    }

    return (
      <View style={{flex: 1, marginTop: 12, paddingLeft: 24}}>
        <FlatList
          data={books}
          keyExtractor={item => `${item.id}`}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={{marginVertical: 8}}>
              <TouchableOpacity style={{flex: 1, flexDirection: 'row'}}>
                <Image
                  source={item.bookCover}
                  resizeMode="cover"
                  style={{width: 100, height: 150, borderRadius: 10}}
                />
                <View style={{flex: 1, marginLeft: 12}}>
                  <View>
                    <CustomText
                      title={item.bookName}
                      style={{
                        paddingRight: 24,
                        fontWeight: 'bold',
                        color: '#fff',
                        fontSize: 20,
                      }}
                    />
                    <CustomText
                      title={item.author}
                      style={{
                        paddingRight: 24,
                        fontWeight: 'bold',
                        color: '#64676d',
                        fontSize: 16,
                      }}
                    />
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 12}}>
                    <Image
                      source={require('../../assets/page_filled_icon.png')}
                      resizeMode="contain"
                      style={{width: 20, height: 20, tintColor: '#64676d'}}
                    />
                    <CustomText
                      title={item.pageNo}
                      style={{
                        paddingHorizontal: 12,
                        color: '#64676d',
                        fontSize: 14,
                      }}
                    />
                    <Image
                      source={require('../../assets/read_icon.png')}
                      resizeMode="contain"
                      style={{width: 20, height: 20, tintColor: '#64676d'}}
                    />
                    <CustomText
                      title={item.readed}
                      style={{
                        paddingHorizontal: 12,
                        color: '#64676d',
                        fontSize: 14,
                      }}
                    />
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 8}}>
                    {item.genre.includes('Adventure') && (
                      <CustomText
                        title="Adventure"
                        style={{
                          height: 40,
                          padding: 8,
                          marginRight: 8,
                          borderRadius: 12,
                          color: '#31ad66',
                          fontSize: 16,
                          backgroundColor: '#213432',
                        }}
                      />
                    )}
                    {item.genre.includes('Romance') && (
                      <CustomText
                        title="Romance"
                        style={{
                          height: 40,
                          padding: 8,
                          marginRight: 8,
                          borderRadius: 12,
                          color: '#c5505e',
                          fontSize: 16,
                          backgroundColor: '#31262f',
                        }}
                      />
                    )}
                    {item.genre.includes('Drama') && (
                      <CustomText
                        title="Drama"
                        style={{
                          height: 40,
                          padding: 8,
                          marginRight: 8,
                          borderRadius: 12,
                          color: '#424baf',
                          fontSize: 16,
                          backgroundColor: '#22273b',
                        }}
                      />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{position: 'absolute', top: 5, right: 15}}>
                <Image
                  source={require('../../assets/bookmark_icon.png')}
                  resizeMode="contain"
                  style={{width: 25, height: 25, tintColor: '#64676d'}}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#1e1b26'}}>
      <View style={{height: 200}}>
        {renderHeader(profile)}
        {renderButtonSection()}
      </View>
      <ScrollView style={{marginTop: 12}}>
        <View>{renderMyBookSection(myBooks)}</View>
        <View style={{marginTop: 24}}>
          <View>{renderCategoryHeader()}</View>
          <View>{renderCategoryData()}</View>
        </View>
      </ScrollView>
    </View>
  );
}
