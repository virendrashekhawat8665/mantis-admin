// import { IData } from 'pages/Blog/types';
// import { IPinData } from 'pages/Pin_Codes/types';
// import { IMeasurementData } from 'pages/UnitsOfMeasurement/types';
// import { IBrandData } from 'pages/brands/types';
// import { IBusinessCategoryData } from 'pages/businesscategory/types';
// import { IProductCrete } from 'pages/product/types';
// import { ITaxSlabData } from 'pages/taxslab/types';
// import { IVariantData } from 'pages/variants/types';
import { ILogin, IPassword } from 'sections/auth/redux/types';
import { emailRegex } from 'utilsNew/constants/Email';
import { passwordRegex } from 'utilsNew/constants/Password';
import CustomSnackbar from '../CustomSnackbar';

export const loginValidation = (form: ILogin) => {
  if (form?.email?.length == 0) {
    CustomSnackbar('Please enter  email', 'error');

    return false;
  }
  if (form?.email?.length > 0 && !emailRegex.test(form?.email)) {
    CustomSnackbar('Please enter valid email', 'error');

    return false;
  }
  if (form?.password?.length == 0) {
    CustomSnackbar('Please enter password', 'error');
    return false;
  }
  return true;
};
export const updatePasswordValidation = (form: IPassword) => {
  if (form?.password?.length == 0) {
    CustomSnackbar('Please enter password', 'error');

    return false;
  }
  if (form?.password?.length > 0 && !passwordRegex.test(form?.password)) {
    CustomSnackbar('Please enter valid', 'error');

    return false;
  }
  if (form?.confirmPassword?.length == 0) {
    CustomSnackbar('Please enter confirm password', 'error');

    return false;
  }
  if (form?.confirmPassword?.length > 0 && !passwordRegex.test(form?.confirmPassword)) {
    CustomSnackbar('Please enter valid confirm password', 'error');

    return false;
  }
  if (form?.password !== form?.confirmPassword) {
    CustomSnackbar('password and confirm password must be the same', 'error');

    return false;
  }
  return true;
};

// export const blogValidation = (form: IData) => {
//   if (form?.title?.length == 0) {
//     CustomSnackbar('Please enter blog title', 'error');
//     return false;
//   }
//   if (form?.shortDescription?.length == 0) {
//     CustomSnackbar('Please enter short description', 'error');
//     return false;
//   }
//   if (form?.longDescription?.length == 0) {
//     CustomSnackbar('Please enter longDescription', 'error');
//     return false;
//   }
//   if (form?.metaTitle?.length == 0) {
//     CustomSnackbar('Please enter meta title', 'error');
//     return false;
//   }
//   if (form?.metaDescription?.length == 0) {
//     CustomSnackbar('Please enter meta description', 'error');
//     return false;
//   }
//   if (form?.thumbImage?.length == 0) {
//     CustomSnackbar('Please select thumbnail image', 'error');
//     return false;
//   }
//   if (form?.file?.length == 0) {
//     CustomSnackbar('Please select blog image', 'error');
//     return false;
//   }
//   return true;
// };
// export const pinCodeValidation = (form: IPinData) => {
//   if (form?.cityId?.length == 0) {
//     CustomSnackbar('Please select city', 'error');
//     return false;
//   }
//   if (form?.pincode?.length == 0) {
//     CustomSnackbar('Please add pin code', 'error');
//     return false;
//   }

//   for (let index = 0; index < form?.pincode?.length; index++) {
//     const element = form?.pincode[index];
//     if (String(element?.pincode)?.length == 0) {
//       CustomSnackbar('Please fill pin code', 'error');
//       return false;
//     }
//     if (String(element?.pincode)?.length < 6) {
//       CustomSnackbar('Please fill valid pin code', 'error');
//       return false;
//     }
//   }
//   return true;
// };
// export const brandsValidation = (form: IBrandData) => {
//   if (form?.title?.length == 0) {
//     CustomSnackbar('Please enter title', 'error');
//     return false;
//   }
//   if (form?.customerHelpLineNo?.length == 0) {
//     CustomSnackbar('Please fill customer helpLine no', 'error');
//     return false;
//   }
//   if (form?.serviceEmail?.length == 0) {
//     CustomSnackbar('Please fill service email', 'error');
//     return false;
//   }
//   if (form?.serviceEmail?.length >= 1 && !emailRegex.test(form?.serviceEmail)) {
//     CustomSnackbar('Please fill valid service email', 'error');
//     return false;
//   }
//   if (form?.serviceNo?.length == 0) {
//     CustomSnackbar('Please fill service no', 'error');
//     return false;
//   }
//   if (form?.icon?.length == 0) {
//     CustomSnackbar('Please select logo', 'error');
//     return false;
//   }
//   return true;
// };
// export const variantValidation = (form: IVariantData) => {
//   if (form?.title?.length == 0) {
//     CustomSnackbar('Please enter title', 'error');
//     return false;
//   }
//   return true;
// };
// export const businessCategoryValidation = (form: IBusinessCategoryData) => {
//   if (form?.title?.length == 0) {
//     CustomSnackbar('Please enter title', 'error');
//     return false;
//   }
//   if (form?.seoTitle?.length == 0) {
//     CustomSnackbar('Please enter seo name', 'error');
//     return false;
//   }
//   if (form?.image?.length == 0) {
//     CustomSnackbar('Please select image', 'error');
//     return false;
//   }
//   for (let index = 0; index < form?.subCategory?.length; index++) {
//     const element = form?.subCategory[index];
//     if (String(element?.title)?.length == 0) {
//       CustomSnackbar('Please fill name', 'error');
//       return false;
//     }
//     if (String(element?.seoTitle)?.length == 0) {
//       CustomSnackbar('Please fill seo name', 'error');
//       return false;
//     }
//     if (String(element?.searchKeywords)?.length == 0) {
//       CustomSnackbar('Please create filter', 'error');
//       return false;
//     }
//   }
//   return true;
// };
// export const measurementValidation = (form: IMeasurementData) => {
//   if (form?.title?.length == 0) {
//     CustomSnackbar('Please enter title', 'error');
//     return false;
//   }
//   if (form?.unitCode?.length == 0) {
//     CustomSnackbar('Please enter unit code', 'error');
//     return false;
//   }
//   return true;
// };
// export const taxSlabValidation = (form: ITaxSlabData) => {
//   if (form?.title?.length == 0) {
//     CustomSnackbar('Please enter title', 'error');
//     return false;
//   }
//   if (String(form?.value)?.length == 0) {
//     CustomSnackbar('Please enter value', 'error');
//     return false;
//   }
//   return true;
// };

// export const productValidation = (
//   form: IProductCrete,
//   type: 'productCreate' | 'seo-details' | 'price' | 'discount' | 'pricingSlab' | 'specification' | 'files'
// ) => {
//   if (type === 'productCreate') {
//     if (form?.title?.length == 0) {
//       CustomSnackbar('Please enter title', 'error');
//       return false;
//     }
//     if (form?.businessCategory?.length == 0) {
//       CustomSnackbar('Please select business category', 'error');
//       return false;
//     }
//     if (form?.brand?.length == 0) {
//       CustomSnackbar('Please select brand', 'error');
//       return false;
//     }
//     if (form?.taxSlab?.length == 0) {
//       CustomSnackbar('Please select tax slab', 'error');
//       return false;
//     }
//     if (form?.unitOfMeasurement?.length == 0) {
//       CustomSnackbar('Please select unit of measurement', 'error');
//       return false;
//     }
//     if (form?.minOrderQty == 0) {
//       CustomSnackbar('Please enter min order quantity', 'error');
//       return false;
//     }
//     if (form?.maxOrderQty == 0) {
//       CustomSnackbar('Please enter max order quantity', 'error');
//       return false;
//     }
//     if (form?.tags?.length == 0) {
//       CustomSnackbar('Please enter and create tags', 'error');
//       return false;
//     }
//     if (form?.shortDescription?.length == 0) {
//       CustomSnackbar('Please enter short description', 'error');
//       return false;
//     }
//     if (form?.description?.length == 0) {
//       CustomSnackbar('Please enter description', 'error');
//       return false;
//     }
//   } else if (type === 'seo-details') {
//     if (form?.seoTitle?.length == 0) {
//       CustomSnackbar('Please enter seo title', 'error');
//       return false;
//     }
//     if (form?.metaTitle?.length == 0) {
//       CustomSnackbar('Please enter meta title', 'error');
//       return false;
//     }
//     if (form?.metaKeywords?.length == 0) {
//       CustomSnackbar('Please select meta keyword', 'error');
//       return false;
//     }
//     if (form?.seoTitle?.length == 0) {
//       CustomSnackbar('Please enter seo title', 'error');
//       return false;
//     }
//   } else if (type === 'price') {
//     if (form?.mrp == 0) {
//       CustomSnackbar('Please enter mrp', 'error');
//       return false;
//     }
//     if (form?.sellingPrice == 0) {
//       CustomSnackbar('Please enter selling price', 'error');
//       return false;
//     }
//     if (form?.unitPrice == 0) {
//       CustomSnackbar('Please enter unit price', 'error');
//       return false;
//     }
//     if (form?.hsnSacCode?.length == 0) {
//       CustomSnackbar('Please enter hsn Sac Code', 'error');
//       return false;
//     }

//     if (form?.sellingUnit?.length == 0) {
//       CustomSnackbar('Please enter hsn Sac Code', 'error');
//       return false;
//     }
//     if (form?.sku?.length == 0) {
//       CustomSnackbar('Please enter sku', 'error');
//       return false;
//     }
//   } else if (type === 'discount') {
//     for (let index = 0; index < form?.discount?.length; index++) {
//       const element = form?.discount[index];
//       if (element?.minQty == 0) {
//         CustomSnackbar('Please fill min quantity', 'error');
//         return false;
//       }
//       if (element?.value == 0) {
//         CustomSnackbar('Please fill value', 'error');
//         return false;
//       }
//       if (element?.startDate.length == 0) {
//         CustomSnackbar('Please select start date', 'error');
//         return false;
//       }
//       if (element?.endDate.length == 0) {
//         CustomSnackbar('Please select end date', 'error');
//         return false;
//       }
//     }
//   } else if (type === 'pricingSlab') {
//     for (let index = 0; index < form?.pricingSlab?.length; index++) {
//       const element = form?.pricingSlab[index];
//       if (element?.qty == 0) {
//         CustomSnackbar('Please fill quantity', 'error');
//         return false;
//       }
//       if (element?.price == 0) {
//         CustomSnackbar('Please fill price', 'error');
//         return false;
//       }
//     }
//   } else if (type === 'specification') {
//     for (let index = 0; index < form?.specification?.length; index++) {
//       const element = form?.specification[index];
//       if (element?.title?.length == 0) {
//         CustomSnackbar('Please fill title', 'error');
//         return false;
//       }
//       if (element?.description?.length == 0) {
//         CustomSnackbar('Please fill description', 'error');
//         return false;
//       }
//     }
//   } else if (type === 'files') {
//     const filterData = form?.files?.filter((x) => {
//       return !x.isDeleted;
//     });
//     if (filterData.length == 0) {
//       CustomSnackbar('Please select at least one images', 'error');
//       return false;
//     }
//   }

//   return true;
// };
