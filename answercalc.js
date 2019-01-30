//starting point
        
                                            var a = document.getElementById("@{ @oa;}").checked;
                                            var b = document.getElementById("@{@ob;}").checked;
                                            var c = document.getElementById("@{@oc;}").checked;
                                            
                                            var t = 0;
                                            var f = 0;


                                            if (w == 0) 
                                            {
                                                if (a == true) 
                                                {
                                                    ++t;
                                                }
                               
                                                
                                              
                                            }

                                            if (w == 1) 
                                            {
                                                 if (a == true) 
                                                {
                                                    ++f;
                                                }
                                                if (n == 0 && b == true)

                                                {
                                                    ++t;
                                                }
                                                
                                                if (n == 1 && c == true)

                                                {
                                                    ++t;
                                                }
                                                if (n == 1 && b == true)

                                                {
                                                    ++f;
                                                }

                                               

                                               
                                            }

                                            if (w == 2) 
                                            {
                                               
                                                if (n == 0 && b == true)

                                                {
                                                    ++t;
                                                }
                                               
                                                if (n == 1 && c == true)

                                                {
                                                    ++t;
                                                }
                                                

                                                
                                            }
                        
       //end of t calculator
                                   


                                       function signs()

                                        {
                                            var a = document.getElementById("@{ @oa;}").checked;
                                            var b = document.getElementById("@{@ob;}").checked;
                                            var c = document.getElementById("@{@oc;}").checked;
                                            
                                            var t = 0;
                                            var f = 0;
                                            

                                            

                                              
                                   
                                                                                  
                                                                             
                                            

                                            if (w == 0) 
                                            {
                                                if (a == true) 
                                                {
                                                    ++t;
                                                }
                               
                                                
                                                if (b == true) 
                                                {
                                                    ++f;
                                                }

                                                if (c == true) 
                                                {
                                                    ++f;
                                                }
                                            }

                                            if (w == 1) 
                                            {
                                                 if (a == true) 
                                                {
                                                    ++f;
                                                }
                                                if (n == 0 && b == true)

                                                {
                                                    ++t;
                                                }
                                                if (n == 0 && c == true)

                                                {
                                                    ++f;
                                                }
                                                if (n == 1 && c == true)

                                                {
                                                    ++t;
                                                }
                                                if (n == 1 && b == true)

                                                {
                                                    ++f;
                                                }

                                               

                                               
                                            }

                                            if (w == 2) 
                                            {
                                                 if (a == true) 
                                                {
                                                    ++f;
                                                }

                                                if (n == 0 && b == true)

                                                {
                                                    ++t;
                                                }
                                                if (n == 0 && c == true)

                                                {
                                                    ++f;
                                                }
                                                if (n == 1 && c == true)

                                                {
                                                    ++t;
                                                }
                                                if (n == 1 && b == true)

                                                {
                                                    ++f;
                                                }

                                                
                                            }

                                            document.getElementById("working").innerHTML = "true" +t+ "false"  + f;

                                            //location.reload(false);

                                             if (t == 1)
                                          {
                                              document.getElementById("tr").value = 1;
                                          }
                                          else
                                          {
                                              document.getElementById("tr").value = 0;
                                          }
                                        }
