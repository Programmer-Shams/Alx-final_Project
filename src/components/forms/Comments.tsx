// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import * as z from "zod"
// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormField, 
//   FormItem,
//   FormLabel,
//   // FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { CommentValidation } from "@/lib/validation"
// // import { Models } from "appwrite"
// // import { useCreatePost, useGetPostById, useUpdatePost } from "@/lib/react-query/queriesAndMutations"
// // import { useUserContext } from "@/context/AuthContext"
// import {  useParams } from "react-router-dom"
// import { useGetPostById } from "@/lib/react-query/queriesAndMutations"


// const Comments = () => {

//     const { id } = useParams();
//     const { data: post, } = useGetPostById(id || "");
//     // const { mutateAsync: createPost, isLoading: isLoadingCreate } =  useCreatePost()
//     // const { mutateAsync: updatePost, isLoading: isLoadingUpdate } =  useUpdatePost()


//     // 1. Define your form.
//     const form = useForm<z.infer<typeof CommentValidation>>({
//       resolver: zodResolver(CommentValidation),
//       defaultValues: {
//         // caption: post ? post?.caption : "",
//         // file: [],
//         // location: post ? post.location : "",
//         // tags: post ? post.tags.join(",") : "",
//       },
//     });
  
 
//   // 2. Define a submit handler.
//    async function onSubmit(values: z.infer<typeof CommentValidation>) {
//     // if(post && action === 'Update') {
//     //   const updatedPost = await updatePost({
//     //     ...values,
//     //     postId: post.$id,
//     //     imageId: post?.imageId,
//     //     imageUrl: post?.imageUrl
//     //   })
//     //   if(!updatedPost) {
//     //     toast({title: 'Please try again'})
//     //   }
//     //   return navigate(`/posts/${post.$id}`)
//     // }
//     // const newPost = await createPost({
//     //   ...values,
//     //   userId: user.id,
//     // })
//     // if (!newPost) {
//     //   toast({
//     //     title: 'post failed. Please try again'
//     //   })
//     // }
//     // navigate('/')
//   }
//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full max-w-5xl border-slate-700 border-2 p-2">
//         <FormField
//           control={form.control}
//           name=""
//           render={({ field }) => (
//             <FormItem className="flex w-full items-center gap-3">
//               <FormLabel className="">
//               <img
//                   src={
//                     post?.creator?.imageUrl ||
//                     "/assest/icons/profile-placeholder.svg"
//                   }
//                   alt="creator"
//                   className=" rounded-full w-8 h-8 lg:h-12 lg:w-12"
//                 />
//               </FormLabel>
//               <FormControl className="border-none bg-transparent">
//                 <Input className="no-focus text-light-1 outline-none" placeholder="comment..." {...field}/>
//               </FormControl>
//             </FormItem>
//           )}
//         />
//         <div className="flex items-center gap-4 justify-end">
//         <Button type='submit' className='shad-button_primary whitespace-nowrap mt-2 rounded-3xl w-[80px] h-[35px]'>
//           Reply
//         </Button>
//         </div>

//       </form>
//     </Form>
//   )
// }

// // shad-input w-[255%]

// export default Comments