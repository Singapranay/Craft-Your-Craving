const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const LogInCollection = require('./mongoDB');

const ReserveCollection=require('./mongo');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
const publicPath = path.join(__dirname, '/public');
console.log(publicPath);

app.get('/signup', (req, res) => {
     res.sendFile(path.join(publicPath, 'signup.html'));
    
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(publicPath, 'login.html'));
   
});
app.get('/', (req, res) => {
     res.sendFile(path.join(publicPath, 'login.html'));
    
});

app.post('/signup', async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
        };

        const existingUser = await LogInCollection.findOne({ name: data.name });
        const existingEmail= await LogInCollection.findOne({email:data.email});
        if (existingUser || existingEmail) {
            console.log("User details already exist");
            res.status(401).send(`
                    <script>
                    alert('User alerady Exists');
                    window.location.href = '/signup.html'; // Redirect to signup page
                    </script>
                `);
        }

        await LogInCollection.create(data);
        res.status(201).sendFile(path.join(publicPath, 'login.html'));
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});


app.post('/login', async (req, res) => {
    try {
        // Find a document in the LogInCollection where name matches the name provided in the request body
        const check = await LogInCollection.findOne({ email: req.body.email });

        // If a document is found
        if (check) {
           
            console.log('Retrieved password:', check.password);
            console.log('Provided password:', req.body.password);

            
            if (check.password === req.body.password) {
               
                res.sendFile(__dirname + '/public/home.html');
            } else {
                // Send error message to display in error div
                
                res.status(401).send(`
                    <script>
                    alert('Incorrect Password or Invalid email');
                    window.location.href = '/login.html'; // Redirect to home page
                    </script>
                `);
            }
            
        } else {
            // If no document is found, send a response indicating wrong details
            res.status(401).send(`
            <script>
            alert('User not Found Re-Enter Again');
            window.location.href = '/signup.html'; // Redirect to login page
            </script>
        `);
        }
    } catch (e) {
        // If an error occurs during the database operation or any other part of the code, send a response indicating an error
        console.error(e);
        res.send("An error occurred");
    }
});
app.get('/rest', (req, res) => {
    res.sendFile(path.join(publicPath, 'rest.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.join(publicPath, 'about.html'));
});
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(publicPath, 'contact.html'));
})

app.post('/reserve', async (req, res) => {
    try {
        const Rdetails={
            fname:req.body.fname,
            lname:req.body.lname,
            email:req.body.email,
            add1:req.body.add1,
            add2:req.body.add2,
            city:req.body.city,
            dist:req.body.dist,
            zip:req.body.zip

        }
        const Rdata = {
            Rname: req.body.Rname,
            
            Rphone: req.body.Rphone,
            Rmember: req.body.Rmembers,
            Rdate: req.body.Rdate,
            Rtime: req.body.Rtime
        };
       
    
        if(Rdetails.fname ==='' || Rdetails.lname==='' || Rdetails.email==='' || Rdetails.add1==='' ||Rdetails.add2===''||Rdetails.city===''|| Rdetails.dist===''||Rdetails.zip==='' || Rdata.name==='' || Rdata.Rphone===''||Rdata.Rmember===''||Rdata.date===''||Rdata.Rtime===''){
            res.status(401).send(`
                <script>
                    alert('Fill all the required feilds');
                    window.location.href = '/checkin.html'; // Redirect to home page
                </script>
            `);
           }
        else{
            await ReserveCollection.create(Rdata);
        res.status(201).send(`
            <script>
                alert('EazyDine says your Reservation Successful');
                window.location.href = '/home.html'; // Redirect to home page
            </script>
        `);}
        
        console.log(Rdata);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error");
    }
});


app.listen(5000, () => {
    console.log("Listening on port 5000");
});
