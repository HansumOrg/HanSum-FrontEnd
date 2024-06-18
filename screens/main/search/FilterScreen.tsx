import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, Pressable } from 'react-native';
import { SearchStackScreenProps } from '../../../navigation/types';
import CheckIcon from '../../../assets/images/icon_checkbox.svg';
import PartyIcon from '../../../assets/images/icon_party.svg';
import BreakfastIcon from '../../../assets/images/icon_breakfast.svg';
import BedroomIcon from '../../../assets/images/icon_bedroom.svg';
import ParkingIcon from '../../../assets/images/icon_parking.svg';
import SwimmingIcon from '../../../assets/images/icon_swimming.svg';
import WomanIcon from '../../../assets/images/icon_woman.svg';
import MultiSlider from '../../../components/filter-page/MultiSlider';
import { useAppSelector, useAppDispatch } from '../../../api/hooks';
import { selectFilter } from '../../../api/selectors';
import { setFilter } from '../../../api/slices/searchSlice';

export default function FilterScreen({
  route,
  navigation,
}: SearchStackScreenProps<'Filter'>) {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(selectFilter);

  const [activity, setActivity] = useState(false);
  const [healing, setHealing] = useState(false);
  const [energetic, setEnergetic] = useState(false);
  const [leisure, setLeisure] = useState(false);

  const [facility, setFacility] = useState('');

  const [minStep, setMinStep] = useState(1);
  const [maxStep, setMaxStep] = useState(10);

  const [moodCount, setMoodCount] = useState(true);
  useEffect(() => {
    if (activity || healing || energetic || leisure) {
      setMoodCount(false);
    } else {
      setMoodCount(true);
    }
  }, [activity, healing, energetic, leisure]);

  const [facilityCount, setFacilityCount] = useState(true);
  useEffect(() => {
    setFacilityCount(facility === '');
  }, [facility]);

  useEffect(() => {
    if (filter.mood) {
      setActivity(filter.mood === '액티비티가 다양한');
      setHealing(filter.mood === '힐링하기 좋은');
      setEnergetic(filter.mood === '활기 넘치는');
      setLeisure(filter.mood === '여유로운');
    }
    if (filter.facility) {
      setFacility(filter.facility);
    }
  }, [filter]);

  const updateMood = (mood: string) => {
    dispatch(
      setFilter({
        mood,
        facility: filter.facility,
      }),
    );
  };

  const updateFacility = (selectedFacility: string) => {
    const newFacility = facility === selectedFacility ? '' : selectedFacility;
    setFacility(newFacility);
    dispatch(
      setFilter({
        mood: filter.mood,
        facility: newFacility,
      }),
    );
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View className="w-screen h-screen bg-white flex justify-center items-center">
        <View className="flex w-10/12 h-full">
          <View className="flex w-full h-1/6 items-center justify-end">
            <View className="flex flex-col w-full h-4/5">
              <View className="flex flex-row w-full h-1/3 justify-between items-center ">
                <Text className="font-inter-sb text-lg text-black">분위기</Text>
              </View>
              <View className="flex flex-row w-full h-1/3 justify-between">
                <View className="flex flex-row w-[45%] h-full items-center justify-between">
                  <Text className="font-inter-m text-s text-black ">
                    액티비티가 다양한
                  </Text>
                  <Pressable
                    className="flex w-auto h-auto rounded-md mx-1"
                    onPress={() => {
                      if (moodCount || activity) {
                        setActivity(!activity);
                        if (!activity) {
                          updateMood('액티비티가 다양한');
                        } else {
                          updateMood('');
                        }
                      }
                    }}
                  >
                    <CheckIcon
                      width={19}
                      height={19}
                      stroke={`${activity ? '#39C3C5' : '#C2C2C2'}`}
                    />
                  </Pressable>
                </View>
                <View className="flex flex-row w-[45%] h-full items-center justify-between">
                  <Text className="font-inter-m text-s text-black ">
                    힐링하기 좋은
                  </Text>
                  <Pressable
                    className="flex w-auto h-auto rounded-md mx-1"
                    onPress={() => {
                      if (moodCount || healing) {
                        setHealing(!healing);
                        if (!healing) {
                          updateMood('힐링하기 좋은');
                        } else {
                          updateMood('');
                        }
                      }
                    }}
                  >
                    <CheckIcon
                      width={19}
                      height={19}
                      stroke={`${healing ? '#39C3C5' : '#C2C2C2'}`}
                    />
                  </Pressable>
                </View>
              </View>
              <View className="flex flex-row w-full h-1/3 justify-between">
                <View className="flex flex-row w-[45%] h-full items-center justify-between">
                  <Text className="font-inter-m text-s text-black">
                    활기 넘치는
                  </Text>
                  <Pressable
                    className="flex w-auto h-auto rounded-md mx-1"
                    onPress={() => {
                      if (moodCount || energetic) {
                        setEnergetic(!energetic);
                        if (!energetic) {
                          updateMood('활기 넘치는');
                        } else {
                          updateMood('');
                        }
                      }
                    }}
                  >
                    <CheckIcon
                      width={19}
                      height={19}
                      stroke={`${energetic ? '#39C3C5' : '#C2C2C2'}`}
                    />
                  </Pressable>
                </View>
                <View className="flex flex-row w-[45%] h-full items-center justify-between">
                  <Text className="font-inter-m text-s text-black">
                    여유로운
                  </Text>
                  <Pressable
                    className="flex w-auto h-auto rounded-md mx-1"
                    onPress={() => {
                      if (moodCount || leisure) {
                        setLeisure(!leisure);
                        if (!leisure) {
                          updateMood('여유로운');
                        } else {
                          updateMood('');
                        }
                      }
                    }}
                  >
                    <CheckIcon
                      width={19}
                      height={19}
                      stroke={`${leisure ? '#39C3C5' : '#C2C2C2'}`}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View className="flex w-full h-2/5">
            <View className="flex flex-row w-full h-1/5 justify-between items-end">
              <Text className="font-inter-sb text-lg text-black">
                시설 서비스
              </Text>
            </View>
            <View className="flex flex-row w-full h-1/3 justify-center">
              <View className="flex flex-row w-10/12 h-full justify-between items-center">
                <Pressable
                  className="flex flex-col w-auto h-auto items-center"
                  onPress={() => updateFacility('파티')}
                >
                  <PartyIcon
                    width={37}
                    height={44}
                    fill={`${facility === '파티' ? '#39C3C5' : '#C2C2C2'}`}
                    stroke={`${facility === '파티' ? '#39C3C5' : '#C2C2C2'}`}
                  />
                  <Text
                    className={`font-inter-sb text-sm text-${
                      facility === '파티' ? 'primary-2' : 'gray-3'
                    } py-1`}
                  >
                    파티
                  </Text>
                </Pressable>
                <Pressable
                  className="flex flex-col w-auto h-auto items-center"
                  onPress={() => updateFacility('조식')}
                >
                  <BreakfastIcon
                    width={42}
                    height={44}
                    fill={`${facility === '조식' ? '#39C3C5' : '#C2C2C2'}`}
                    stroke={`${facility === '조식' ? '#39C3C5' : '#C2C2C2'}`}
                  />
                  <Text
                    className={`font-inter-sb text-sm text-${
                      facility === '조식' ? 'primary-2' : 'gray-3'
                    } py-1`}
                  >
                    조식
                  </Text>
                </Pressable>
                <Pressable
                  className="flex flex-col w-auto h-auto items-center"
                  onPress={() => updateFacility('1인실')}
                >
                  <BedroomIcon
                    width={44}
                    height={44}
                    fill={`${facility === '1인실' ? '#39C3C5' : '#C2C2C2'}`}
                  />
                  <Text
                    className={`font-inter-sb text-sm text-${
                      facility === '1인실' ? 'primary-2' : 'gray-3'
                    } py-1`}
                  >
                    1인실
                  </Text>
                </Pressable>
              </View>
            </View>
            <View className="flex w-full h-1/3 items-center">
              <View className="flex flex-row w-10/12 h-full justify-between items-center">
                <Pressable
                  className="flex flex-col w-auto h-auto items-center"
                  onPress={() => updateFacility('주차')}
                >
                  <ParkingIcon
                    width={50}
                    height={44}
                    fill={`${facility === '주차' ? '#39C3C5' : '#C2C2C2'}`}
                  />
                  <Text
                    className={`font-inter-sb text-sm text-${
                      facility === '주차' ? 'primary-2' : 'gray-3'
                    } py-1`}
                  >
                    주차
                  </Text>
                </Pressable>
                <Pressable
                  className="flex flex-col w-auto h-auto items-center"
                  onPress={() => updateFacility('수영')}
                >
                  <SwimmingIcon
                    width={48}
                    height={44}
                    stroke={`${facility === '수영' ? '#39C3C5' : '#C2C2C2'}`}
                  />
                  <Text
                    className={`font-inter-sb text-sm text-${
                      facility === '수영' ? 'primary-2' : 'gray-3'
                    } py-1`}
                  >
                    수영
                  </Text>
                </Pressable>
                <Pressable
                  className="flex flex-col w-auto h-auto items-center"
                  onPress={() => updateFacility('여성전용')}
                >
                  <WomanIcon
                    width={46}
                    height={44}
                    stroke={`${
                      facility === '여성전용' ? '#39C3C5' : '#C2C2C2'
                    }`}
                  />
                  <Text
                    className={`font-inter-sb text-sm text-${
                      facility === '여성전용' ? 'primary-2' : 'gray-3'
                    } py-1`}
                  >
                    여성전용
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          <View className="flex flex-col w-full h-2/5">
            <View className="flex w-full h-auto">
              <Text className="font-inter-sb text-xl text-black">가격</Text>
            </View>
            <View className="flex w-full h-2/5 items-center">
              <View className="flex w-11/12 h-full">
                <MultiSlider
                  min={1}
                  max={10}
                  minStep={minStep}
                  setMinStep={setMinStep}
                  maxStep={maxStep}
                  setMaxStep={setMaxStep}
                />
              </View>
            </View>
          </View>
        </View>
        <Pressable
          className="absolute z-10 bottom-0 mb-[4%] items-center justify-center w-full h-1/5 shadow-black drop-shadow-xl"
          onPress={() => {
            dispatch(
              setFilter({
                mood: filter.mood,
                facility,
              }),
            );
            navigation.goBack();
          }}
        >
          <View className="flex w-full h-1/3 bg-primary-2  justify-center items-center shadow-2xl shadow-black/100">
            <Text className="font-inter-sb text-md text-white ">적용하기</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
