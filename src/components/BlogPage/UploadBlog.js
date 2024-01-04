import {
   Button,
   Card,
   CardContent,
   Container,
   FormLabel,
   Input,
   Textarea,
} from "@mui/joy";
import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
const UploadBlog = () => {
   const editor = useRef(null);
   const [content, setContent] = useState();
   return (
      <div className="blog__wrapper">
         <Card>
            <CardContent>write a blog</CardContent>
            <form>
               <div>
                  <FormLabel>Post title</FormLabel>
                  <Input type="text" placeholder="Enter here" />
               </div>
               <div>
                  <FormLabel>Post Content</FormLabel>
                  <JoditEditor
                     ref={editor}
                     value={content}
                     onChange={(newContent) => setContent(newContent)}
                  />
                  {/* <Input type="text" placeholder="Enter here" /> */}
                  {/* <Textarea minRows={7} type="text" /> */}
               </div>
               <Container className="contact__flex">
                  <Button>Submit</Button>
               </Container>
            </form>
         </Card>
         {content}
      </div>
   );
};

export default UploadBlog;
