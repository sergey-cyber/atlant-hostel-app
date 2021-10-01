import axios from "axios";
import { UserData } from "../custom_types/api_types";

const instance = axios.create({
  /* withCredentials: true, */
  baseURL: "http://localhost:5000/api/" /* 'https://limitless-island-50835.herokuapp.com/api/' */,
  headers: {
    /* "Access-Control-Allow-Origin": "*" */
  },
});

export const authAPI = {
  registration(email: string, password: string, userData: UserData) {
    return instance.post("auth/register", { email, password, userData }).then((response) => {
      return response.data;
    });
  },
  login(email: string, password: string) {
    return instance.post("auth/login", { email, password }).then((response) => {
      return response.data;
    });
  },
};

export const hostelDataAPI = {
  getBedsData() {
    return instance.get("hostelData/bedsData");
  },
  setBookingDatesForBed(placeNumber: any, dateRange: any) {
    return instance.patch("hostelData/bedsData/setBookingDateForBed", { placeNumber, dateRange });
  },
};

export const homePageDataAPI = {
  getReviewsPart(currentRevPart = 1, revPartSize = 5) {
    return instance
      .get(`home?currentRevPart=${currentRevPart}&revPartSize=${revPartSize}`)
      .then((response: any) => response.data);
  },
  postNewReview(reviewFormData: any) {
    return instance.post("home/", { reviewFormData }).then((response: any) => response.data);
  },
};

/* export const usersAPI = {
    setUsers (currentPage = 1, pageSize = 100) {  //присвоение 1 и 10 к параметрам функции - это параметры по умолчанию если в функцию ниего не прийдет
        return instance.get(`users?page=${currentPage}&count=${pageSize}`) //Базовый урл сам добавляется, так как сидит в инстансе
        .then(response => {
                return response.data;   //после ответа сервака, функция возвращает дата, которая сидит в респонсе(урок 63)
            });
    }, 
    setUnfollow (userId) {
        return instance.delete(`follow/${userId}`);    
    },
    setFollow (userId) {
        return instance.post(`follow/${userId}`);
    },
    getProfile (userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId);
    }     
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get('profile/'+userId);
    },
    getStatus(userId) {
        return instance.get('profile/status/'+userId);
    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status});
    },
    savePhoto(photoFile) {
        const formData = new FormData();    //Юзаем это при отпраке фоток на сервак 
        formData.append('image', photoFile);
        return instance.put('profile/photo/', formData, {
            headers: {
                'Content-Type':'multipart/form-data' 
            }
        });
    },
    saveProfileData(profile) {
        return instance.put('profile/', profile);
    }
}

export const authAPI = {
    me () {
        return instance.get('auth/me');
    },
    authPhoto () {
        return instance.get('users?page=1&count=100');
    },
    login (email, password, rememberMe = false) {   //Lesson 78
        return instance.post('auth/login', {email, password, rememberMe});
    },
    logout () { //Lesson 78
        return instance.delete('auth/login');
    }
} */
