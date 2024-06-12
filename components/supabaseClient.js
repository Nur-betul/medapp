// supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ltuangxwymejnflvtrws.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0dWFuZ3h3eW1lam5mbHZ0cndzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE1OTk5NjEsImV4cCI6MjAxNzE3NTk2MX0.rrXCL3xldFvbEuOXhbu_icQrxncrkY9Wv4ZccpB2_GY';
export const supabase = createClient(supabaseUrl, supabaseKey);
