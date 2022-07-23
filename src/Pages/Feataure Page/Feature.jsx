import { Heading, Button, Link, Image, Stack, Box } from "@chakra-ui/react";
import React from "react";
import "./Feature.css";
import AppStoreBadge from "../../Files/ios-button.png";
import PlayStoreBadge from "../../Files/android-button.png";
import { useNavigate } from "react-router-dom";


const Feature = () => {
    const navigate =useNavigate()
    return (
        <div style={{ border: "1px solid white" }}>
            <div
                style={{ marginTop: "100px", fontSize: "40px", marginLeft: "150px" }}
            >
                Take a tour
            </div>
            <hr />
            {/* Track Your Gym and Cardio Workouts div start */}

            <div className="feature-main-div">
                <div className="feature-left-div">
                    <img src={"https://www.gymwolf.com/images/demo/workouts.png"} />
                </div>

                <div className="feature-right-div">
                    <div className="feature-heading">
                        Track Your Gym and Cardio Workouts
                    </div>

                    <div className="feature-para">
                        Gymwolf is a workout tracking tool that helps you track your gym and
                        cardio workouts. For gym workouts just add your exercises and sets.
                        For cardio workouts enter the activity, duration and distance. It's
                        really easy. You can also track your bodyweight and add notes on
                        both gym and cardio workouts.
                    </div>

                    <div className="feature-img">
                        <div>
                            <img src={"https://www.gymwolf.com/images/demo/s_01_01.jpg"} />
                        </div>
                        <div>
                            <img src={"https://www.gymwolf.com/images/demo/s_01_02.jpg"} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Track Your Gym and Cardio Workouts div end */}
            <hr />
            {/*progress div start */}

            <div className="progress-main-div">
                <div className="feature-left-div">
                    <img src={"https://www.gymwolf.com/images/demo/progress.png"} />
                </div>

                <div className="feature-right-div">
                    <div className="feature-heading">See your progress</div>

                    <div className="feature-para">
                        Gymwolf provides different graphs that help you track your progress.
                        There are graphs for gym workouts, cardio workouts and bodyweight.
                        The graphs are highly customizable: you can select the date range,
                        exercise and group the results by month, week or single workout.
                    </div>

                    <div className="progress-img">
                        <div>
                            <img
                                src={"https://www.gymwolf.com/images/demo/s_02_01_thumb.jpg"}
                            />
                        </div>
                        <div>
                            <img src={"https://www.gymwolf.com/images/demo/s_02_02.jpg"} />
                        </div>
                        <div>
                            <img src={"https://www.gymwolf.com/images/demo/s_02_03.jpg"} />
                        </div>
                    </div>
                </div>
            </div>
            {/*progress div end */}
            <hr />
            {/*Exercise div start */}

            <div className="exercise-main-div">
                <div className="exercise-left-div">
                    <img src={"https://www.gymwolf.com/images/demo/exercises.png"} />
                </div>

                <div className="feature-right-div">
                    <div className="feature-heading">Database with 300+ exercises</div>

                    <div className="feature-para">
                        Gymwolf has a database with over 300 exercises. The exercises come
                        with detailed descriptions, tips and step-by-step images. If you
                        don't find a exercise from our database, then you can also add your
                        own exercises
                    </div>

                    <Button>Check out our exercise list. </Button>

                    <div className="feature-img">
                        <div>
                            <img
                                src={"https://www.gymwolf.com/images/demo/s_03_01_thumb.jpg"}
                            />
                        </div>
                        <div>
                            <img src={"https://www.gymwolf.com/images/demo/s_03_02.jpg"} />
                        </div>
                    </div>
                </div>
            </div>

            {/*Exercise div end */}
            <hr />
            {/*Workout div strat */}

            <div className="workout-main-div">
                <div className="feature-left-div">
                    <img src={"https://www.gymwolf.com/images/demo/workout-plans.png"} />
                </div>

                <div className="feature-right-div">
                    <div className="feature-heading">Create Workout Plans</div>

                    <div className="feature-para">
                        With Gymwolf you can create your own workout plans. You can also
                        browse workout plans created by other users and add them to your
                        plans with just one click. Workout plans make adding your workout
                        data even easier: add a new workout and select your workout plan,
                        the workout data will be filled in automatically.
                    </div>

                    <div className="workout-img">
                        <div>
                            <img
                                src={"https://www.gymwolf.com/images/demo/s_03_01_thumb.jpg"}
                            />
                        </div>
                        <div>
                            <img src={"https://www.gymwolf.com/images/demo/s_03_02.jpg"} />
                        </div>
                    </div>
                </div>
            </div>
            {/*Workout div end */}
            <hr />
            {/*Online div strat */}

            <div className="online-main-div">
                <div className="feature-left-div">
                    <img
                        src={"https://www.gymwolf.com/images/demo/personal-trainer.png"}
                    />
                </div>

                <div className="feature-right-div">
                    <div className="feature-heading">Online personal trainer</div>

                    <div className="feature-para">
                        Gymwolf has certified personal trainers that provide you with
                        customised workout plans depending on your goals. Our trainers track
                        your progress, coach and motivate you daily through our web and
                        smartphone app.
                    </div>
                    <Button>Learn more</Button>
                </div>
            </div>
            {/*Online div end */}
            <hr />
            {/*Mobile div strat */}

            <div className="mobile-main-div">
                <div className="feature-left-div">
                    <img src={"https://www.gymwolf.com/images/demo/app.png"} />
                </div>

                <div className="feature-right-div">
                    <div className="feature-heading">Discover Our Mobile Apps</div>

                    <div className="feature-para">
                        Our mobile apps save all the workout data online at Gymwolf.com, so
                        you don't have to worry about syncing or backing up your data. Check
                        out our mobile apps:
                    </div>
                    <br />
                    <div className="mobile-img">
                        <Stack>
                            <div>
                                <Link
                                    href={
                                        "https://play.google.com/store/apps/details?id=com.mooncascade.gymwolf"
                                    }
                                >
                                    {" "}
                                    <Image src={PlayStoreBadge} style={{ width: "150px" }} />
                                </Link>
                            </div>
                            <div>
                                <Link
                                    href={"https://apps.apple.com/us/app/gymwolf/id1228119580"}
                                >
                                    <Image src={AppStoreBadge} style={{ width: "150px" }} />
                                </Link>
                            </div>
                        </Stack>
                    </div>
                </div>
            </div>
            {/*Mobile div end */}

<hr />
            <Box style={{ textAlign: "center", margin: "100px" }}>
                <Heading size="lg">
                    Gymwolf is the best tool to track your workouts online.
                </Heading>
                <br />

                <Button
                    colorScheme="white"
                    bg="#26a9e1"
                    size="md"
                    height="50px"
                    width="200px"
                    border="2px"
                    borderColor="#26a9e1"

                onClick={()=>navigate("/register")}
                >
                    Start using Gymwolf
                </Button>
            </Box>
        </div>
    );
};

export default Feature;
