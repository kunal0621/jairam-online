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
  useToast,
  Select,
} from "@/components/ui";
import { useForm } from "react-hook-form";
import { OrderValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateOrder, useUpdateOrder } from "@/lib/react-query/queries";
import { Loader } from "@/components/shared";

type OrderFormProps = {
  order?: Models.Document;
  action: "Create" | "Update";
};

const CreateOrder = ({ order, action }: OrderFormProps) => {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof OrderValidation>>({
      resolver: zodResolver(OrderValidation),
      defaultValues: {
        party_name: order?.party_name || "",
        party_address: order?.party_address || "",
        bording_point: order?.bording_point || "",
        bording_date: order?.bording_date || "",
        bording_time: order?.bording_time || "",
        bording_time_frame: order?.bording_time_frame || "",
        destination_point: order?.destination_point || "",
        departure_time: order?.departure_time || "",
        returning_date: order?.returning_date || "",
        returning_time: order?.returning_time || "",
        returning_time_frame: order?.returning_time_frame || "",
        agreed_amount: order?.agreed_amount || "",
        advance_amount: order?.advance_amount || "",
        owner_name: order?.owner_name || "",
      },
    });
  
    // Query
    const { mutateAsync: createOrder, isLoading: isLoadingCreate } =
      useCreateOrder();
    const { mutateAsync: updateOrder, isLoading: isLoadingUpdate } =
      useUpdateOrder();
  
    // Handler
    const handleSubmit = async (value: z.infer<typeof OrderValidation>) => {
      // ACTION = UPDATE
      console.log("post submit function", value);
      const orderId = order?.orderId
      if (order && action === "Update") {
        const updatedPost = await updateOrder({
          ...value,
          orderId
        });
  
        if (!updatedPost) {
          toast({
            title: `${action} order failed. Please try again.`,
          });
        }
      }
  
      // ACTION = CREATE
      const newPost = await createOrder({
        ...value,
      });
  
      if (!newPost) {
        toast({
          title: `${action} order failed. Please try again.`,
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
          name="party_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Party Name</FormLabel>
              <FormControl>
                <Input
                  className="shad-input" type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="owner_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Agent Name</FormLabel>
              <FormControl>
                <Input
                  className="shad-input" type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bus_no"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Bus Number
              </FormLabel>
              <FormControl>
                <Select
                  className="shad-input"
                  {...field}
                >
                  <option value=''>select Bus</option>
                  <option value='0021'>JH 10 CE 0021</option>
                  <option value='0121'>JH 10 CU 0121</option>
                </Select>
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="party_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Address</FormLabel>
              <FormControl>
                <Input
                  className="shad-input" type="text"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bording_point"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Bording Place</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bording_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Bording Date
              </FormLabel>
              <FormControl>
                <Input
                  type="date"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bording_time"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Bording Time
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bording_time_frame"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Bording Time Frame
              </FormLabel>
              <FormControl>
                <Select
                  className="shad-input"
                  {...field}
                >
                  <option value=''>select time</option>
                  <option value='morning'>Morning</option>
                  <option value='evening'>Evening</option>
                </Select>
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="destination_point"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Destination Place</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="departure_time"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Departure Time
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="returning_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Returning Date
              </FormLabel>
              <FormControl>
                <Input
                  type="date"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="returning_time"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Returning Time
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="returning_time_frame"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Returning Time Frame
              </FormLabel>
              <FormControl>
                <Select
                  className="shad-input"
                  {...field}
                >
                  <option value=''>select time</option>
                  <option value='morning'>Morning</option>
                  <option value='evening'>Evening</option>
                </Select>
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="agreed_amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Agreed Amount
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  className="shad-input"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="advance_amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">
                Advance Amount
              </FormLabel>
              <FormControl>
                <Input
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
