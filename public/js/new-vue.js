var app = new Vue({
      el: '#app',
      // data: {
      //   message: 'Hello Vue!',
      //   students: []
      // },
      created(){
      	axios.get("http://localhost:8080/api/students")
      	.then(response=>{
      		this.students = response.data;
      		console.log(response.data)

      	})
      },
      data(){
        return{
          userData: {
            name: "",
            regno: "",
            department: "",
            phone: "",
            age: 0,
          },
          message: 'Hello vue',
          students: [],
          student: {},        } 
      },
      methods: {
        register: function(){
          console.log(this.userData);
          let self = this;
          axios.post("http://localhost:8080/api/student", self.userData)
          .then(function(response){
            console.log(response.data);
            self.students.push(self.userData)
          })
          .catch(function(error){
            console.log(error);

          });
        },

        update: function(){
          console.log(this.userData);
          let self = this;
          let user = {
            name: userData.name,
            regno: userData.regno,
            department: userData.department,
            phone: userData.phone,
            age:userData.age,
          }
          axios.put("http://localhost:8080/api/school/"+ self.userData._id, user)
          .then(function(response){
            console.log(response.data);
            self.students.forEach(function(stud, idx){
              if(stud._id == id){ 
                stud= userData;
              }
            })
          })
          .catch(function(error){
            console.log(error);

          });
        },
        deleteStudent: function(){
          console.log(this.userData);
          let self = this;
          axios.delete("http://localhost:8080/api/school/" + self.userData._id)
          .then(function(response){
            console.log(response.data);
            self.students.forEach(function(stud, idx){
              if(stud._id == self.userData._id){ 
                self.students.splice(idx, 1);
              }
            })
          })
          .catch(function(error){
            console.log(error);

          });
        },
        selectStudent: function(id){
          let self = this;
            let newStudent = self.students.filter(function(stud){
              return stud._id == id;
            })
            this.userData = newStudent[0];
        },
      },
   })