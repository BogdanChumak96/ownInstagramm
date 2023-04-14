import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import user from '../../common/user';
import {useForm, Control, Controller} from 'react-hook-form';
import {styles} from './styles';
import {IUser} from '../../types/models';
import {colors} from '../../theme/colors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
type IEditableUser = Pick<IUser, IEditableFields>;
type IEditableFields = 'name' | 'username' | 'website' | 'bio';

interface ICustomInput {
  label: string;
  multiline?: boolean;
  control: Control<IEditableUser, object>;
  name: IEditableFields;
  rules?: object;
}

const CustomInput = ({
  label,
  multiline = false,
  name,
  control,
  rules = {},
}: ICustomInput) => (
  <Controller
    rules={rules}
    control={control}
    name={name}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              style={[
                styles.input,
                {borderColor: error ? colors.red : colors.border},
              ]}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              multiline={multiline}
              placeholder="Hello"
            />
            {error && (
              <Text style={{color: colors.red}}>
                {error.message || 'Error '}
              </Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

const EditProfileScreen = () => {
  const [Avatar, setAvatar] = useState<null | Asset>(null);
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<IEditableUser>();

  const onSubmit = (data: IEditableUser) => {
    console.log('Data', data);
  };
  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({assets, didCancel, errorMessage, errorCode}) => {
        if (!didCancel && assets?.length > 0 && !errorCode) {
          setAvatar(assets[0].uri);
          console.warn(assets[0].uri);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Image style={styles.avatar} source={{uri: Avatar || user.image}} />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change Profile Avatar
      </Text>

      <CustomInput
        rules={{required: 'Name is required'}}
        control={control}
        label="Name"
        name="name"
      />
      <CustomInput
        rules={{
          required: 'Username is required',
          minLength: {value: 3, message: 'Username must be more 3 character'},
        }}
        control={control}
        label="Username"
        name="username"
      />
      <CustomInput
        rules={{required: 'Website is required'}}
        control={control}
        label="Website"
        name="website"
      />
      <CustomInput
        rules={{
          required: 'Bio is required',
          maxLength: {
            value: 200,
            message: 'Biu must be at least 200 characters',
          },
        }}
        control={control}
        label="Bio"
        multiline
        name="bio"
      />
      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

export default EditProfileScreen;
