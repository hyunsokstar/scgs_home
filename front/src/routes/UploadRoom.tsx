import { Box, Input } from "@chakra-ui/react";
// import useHostOnlyPage from "../components/HostOnlyPage";
// import ProtectedPage from "../components/ProtectedPage";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'


export default function UploadRoom() {
    // useHostOnlyPage();
    return (
        <Box ml={200} mr={200}>

            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

        </Box>
    );
}
