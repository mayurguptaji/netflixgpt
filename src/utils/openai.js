import OpenAI from "openai";
import {chatgptsecretkey} from './constants';

const openai = new OpenAI({
    apiKey: chatgptsecretkey, // This is the default and can be omitted
    dangerouslyAllowBrowser : true,
  });

export default openai;