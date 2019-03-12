const resolvers =  {
  Query: {
    sayHello : () => {
      return (
        {ok:true,error:"Hello"}
      )
    }
  }
};

export default resolvers;
  
