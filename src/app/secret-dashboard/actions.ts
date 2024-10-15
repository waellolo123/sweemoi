"use server";
import prisma from "@/db/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export type PostArgs = {
  text: string;
  mediaUrl?: string;
  mediaType?: "image" | "video";
  isPublic: boolean;
}

export async function createPostAction({isPublic, mediaUrl, mediaType, text}: PostArgs){
  const admin = await checkIfAdmin();

 if(!admin){
  throw new Error("unauthorized");
 }

  const newPost = await prisma.post.create({
    data: {
      text,
      mediaUrl,
      mediaType,
      isPublic,
      userId: admin.id
    }
  });

  return {success: true, post: newPost}
}


export async function getAllProductsAction(){
  const isAdmin = await checkIfAdmin();
  if(!isAdmin) {
    throw new Error("unauthorized");
  }
  
  const products = await prisma.product.findMany();
  return products;
}

type ProductArgs = {
  name: string;
  image: string;
  price: string | undefined;
}

export async function addNewProductToStoreAction({name, image, price}: ProductArgs) {
  const isAdmin = await checkIfAdmin();
  if(!isAdmin) {
    throw new Error("unauthorized");
  }

   if(!name || !image || !price) {
    throw new Error("please fill all fields");
   }

   const priceInCents = Math.round(parseFloat(price) * 100);
   if(isNaN(priceInCents)){
    throw new Error("price must be a number");
   }

   const newProduct = await prisma.product.create({
    data: {
      image, 
      price: priceInCents,
      name
    }
   });

   return {success: true, product: newProduct};
   
}


export async function toggleProductArchiveAction(productId:string){
  const isAdmin = await checkIfAdmin();
  if(!isAdmin){
    throw new Error("unauthorized");
  }
  const product = await prisma.product.findUnique({where: {id: productId}});
  if(!product){
    throw new Error("Product not found");
  }
  const updatedProduct = await prisma.product.update({
    where: {id: productId},
    data: {
      isArchived: !product.isArchived
    }
  });
  return {success: true, product: updatedProduct};
}

async function checkIfAdmin(){
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  const isAdmin = user?.email === process.env.ADMIN_EMAIL;

  if(!user || !isAdmin) return false;

  return user;
}