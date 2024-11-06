import { IProfileEditValues } from "../types/user";

export function appendUserFormData(userData: IProfileEditValues) {
  if (typeof userData.image !== "string" && userData.image !== null) {
    const formData = new FormData();
    for (const property in userData) {
      if (property === "image") {
        formData.append("image", userData.image ? userData.image : "");
      }
      if (Object.prototype.hasOwnProperty.call(userData, property)) {
        const value = userData[property as keyof IProfileEditValues];
        formData.append(`${property}`, value ? value.toString() : "");
      }
    }
    return formData;
  } else {
    const { image, ...rest } = userData;
    return JSON.stringify({ ...rest });
  }
}
