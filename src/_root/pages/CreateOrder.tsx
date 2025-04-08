import * as z from "zod";
import { Models } from "appwrite";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
  Input,
  Textarea,
  useToast,
} from "@/components/ui";
// import useDebounce from "@/hooks/useDebounce";
import { useUserContext } from "@/context/AuthContext";
import { useForm } from "react-hook-form";
import { PostValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreatePost, useUpdatePost } from "@/lib/react-query/queries";
import { Loader } from "@/components/shared";
// import { updateOrder } from "@/lib/appwrite/api";

type PostFormProps = {
  post?: Models.Document;
  action: "Create" | "Update";
};

const CreateOrder = ({ post, action }: PostFormProps) => {
    const { toast } = useToast();
    const { user } = useUserContext();
    const form = useForm<z.infer<typeof PostValidation>>({
      resolver: zodResolver(PostValidation),
    });
  
    // Query
    const { mutateAsync: createPost, isLoading: isLoadingCreate } =
      useCreatePost();
    const { mutateAsync: updateOrder, isLoading: isLoadingUpdate } =
      useUpdatePost();
  
    // Handler
    const handleSubmit = async (value: z.infer<typeof PostValidation>) => {
      // ACTION = UPDATE
      if (post && action === "Update") {
        const updatedPost = await updateOrder({
          ...value,
          orderId: post.$id,
          bording_point: "",
          bording_date: "",
          bording_time_frame: "",
          departure_time: "",
          destination_point: "",
          returning_date: "",
          returning_time_frame: "",
          returning_time: "",
          agreed_amount: "",
          advance_amount: ""
        });
  
        if (!updatedPost) {
          toast({
            title: `${action} order failed. Please try again.`,
          });
        }
      }
  
      // ACTION = CREATE
      const newPost = await createPost({
        ...value,
        userId: user.id,
      });
  
      if (!newPost) {
        toast({
          title: `${action} post failed. Please try again.`,
        });
      }
    }

  return (
    <div className="explore-container">
      <div className="explore-inner_container">
        <h2 className="h3-bold md:h2-bold w-full">New Booking</h2>
      </div>

      <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-9 w-full  max-w-5xl">
        <FormField
          control={form.control}
          name="caption"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Caption</FormLabel>
              <FormControl>
                <Textarea
                  className="shad-textarea custom-scrollbar"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Add Location</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Add Tags (separated by comma " , ")
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Art, Expression, Learn"
                  type="text"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <div className="flex gap-4 items-center justify-end">
          <Button
            type="submit"
            className="shad-button_primary whitespace-nowrap"
            disabled={isLoadingCreate || isLoadingUpdate}>
            {(isLoadingCreate || isLoadingUpdate) && <Loader />}
            {action} Book
          </Button>
        </div>
      </form>
    </Form>

      
    </div>
  );
};

export default CreateOrder;
