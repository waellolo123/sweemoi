"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CldUploadWidget, CldVideoPlayer, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import { addNewProductToStoreAction } from "../actions";
import { useToast } from "@/components/hooks/use-toast";


const AddNewProductForm = () => {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const {toast} = useToast();
  const queryClient = useQueryClient();

  const {mutate: createProduct, isPending} = useMutation({
    mutationKey: ["createProduct"],
    mutationFn: async () => await addNewProductToStoreAction({name, image: imgUrl, price}),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["getAllProducts"]});
      toast({
        title: "Product added successfully",
        description: "the product has been added to your store is online"
      });
      setName("");
      setPrice("");
      setImgUrl("");
    }
  });


  return (
    <>
    <p className="text-3xl tracking-tighter my-5 font-medium text-center">Add New Product</p>
    <form onSubmit={(e) => {
      e.preventDefault();
      createProduct();
    }}>
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">New Merch</CardTitle>
          <CardDescription>Add a new product to your store. Select only one image.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input 
            id="name"
            type="text"
            placeholder="Your product Name..."
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-4 grid gap-2">
            <Label htmlFor="price">Price ($)</Label>
            <Input 
            id="price"
            type="number"
            placeholder="Your product price..."
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <CldUploadWidget signatureEndpoint="/api/sign-image"
          onSuccess={(result, {widget}) => {
            setImgUrl((result.info as CloudinaryUploadWidgetInfo).secure_url);
            widget.close();
          }}
          >
           {({open}) => {
            return (
            <Button 
            className=""
            onClick={() => open()} 
            variant={"outline"} 
            type="button">Upload an Image</Button>
          )
           }}
          </CldUploadWidget>
          {imgUrl && (
            <div className="flex justify-center relative w-full h-96">
              <Image fill src={imgUrl} alt="product image" className="rounded-md object-contain" />
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit" disabled={isPending}>{isPending ? "Please wait..." : "Add Product"}</Button>
        </CardFooter>
      </Card>
    </form>
    </>
  )
}

export default AddNewProductForm;
