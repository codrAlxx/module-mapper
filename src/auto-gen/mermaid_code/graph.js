export default `
classDiagram

direction LR

        class \`BookingController.java\` {
            Type: File
            Contains: RestAPIController
            Path: .../controller/BookingController.java
        }

        class BookingController{
            Type: Class
            FileName: BookingController.java
        }

        \`BookingController.java\` --|> BookingController : Defines
        
                BookingController : bookMyShow(Booking) /booking/book
                
                BookingController : cancelMyShow(Long, Integer) /booking/cancel/~bookingId~
                
                BookingController : getMyUpcomingBookings() /booking/my/upcoming
                
                BookingController : getMyPastBookings() /booking/my/past
                
        class \`CouponController.java\` {
            Type: File
            Contains: RestAPIController
            Path: .../controller/CouponController.java
        }

        class CouponController{
            Type: Class
            FileName: CouponController.java
        }

        \`CouponController.java\` --|> CouponController : Defines
        
                CouponController : addNewCoupon(Coupon) 
                
                CouponController : deleteExpiredCoupons() 
                
        class \`EventController.java\` {
            Type: File
            Contains: RestAPIController
            Path: .../controller/EventController.java
        }

        class EventController{
            Type: Class
            FileName: EventController.java
        }

        \`EventController.java\` --|> EventController : Defines
        
                EventController : addNewEvent(Event) 
                
                EventController : deleteThisEvent(Long) 
                
                EventController : getUpcomingEvents() 
                
                EventController : getEventsOfThisName(String) 
                
                EventController : getAllEventsOfThisEventType(String) 
                
                EventController : getAllEventsAtThisTheater(String) 
                
                EventController : getEventsWithPaginationAndSort(int, int, String) 
                
        class \`EventTypeController.java\` {
            Type: File
            Contains: RestAPIController
            Path: .../controller/EventTypeController.java
        }

        class EventTypeController{
            Type: Class
            FileName: EventTypeController.java
        }

        \`EventTypeController.java\` --|> EventTypeController : Defines
        
                EventTypeController : addNewEventType(EventType) 
                
                EventTypeController : getAllEventTypes() 
                
        class \`HelloWorldController.java\` {
            Type: File
            Contains: RestAPIController
            Path: .../controller/HelloWorldController.java
        }

        class HelloWorldController{
            Type: Class
            FileName: HelloWorldController.java
        }

        \`HelloWorldController.java\` --|> HelloWorldController : Defines
        
                HelloWorldController : helloWorld() /
                
        class \`TheaterController.java\` {
            Type: File
            Contains: RestAPIController
            Path: .../controller/TheaterController.java
        }

        class TheaterController{
            Type: Class
            FileName: TheaterController.java
        }

        \`TheaterController.java\` --|> TheaterController : Defines
        
                TheaterController : addTheater(Theater) 
                
        class \`UserController.java\` {
            Type: File
            Contains: RestAPIController
            Path: .../controller/UserController.java
        }

        class UserController{
            Type: Class
            FileName: UserController.java
        }

        \`UserController.java\` --|> UserController : Defines
        
                UserController : addUser(User) 
                
                UserController : authenticateAndGetToken(LoginForm) 
                
        class \`GlobalExceptionHandler.java\` {
            Type: File
            Contains: Class
            Path: .../exception/GlobalExceptionHandler.java
        }

        class GlobalExceptionHandler{
            Type: Class
            FileName: GlobalExceptionHandler.java
        }

        \`GlobalExceptionHandler.java\` --|> GlobalExceptionHandler : Defines
        
                GlobalExceptionHandler : handleUserAgeLessThan18(UserAgeLessThan18Exception) 
                
                GlobalExceptionHandler : handleEndBeforeStart(EventEndBeforeStartException) 
                
                GlobalExceptionHandler : handleSimilarEvents(EventClashException) 
                
                GlobalExceptionHandler : handleTheaterOREventNotFound(TheaterOREventNotExistsException) 
                
                GlobalExceptionHandler : handleDependentBookings(DependentBookingExistsException) 
                
                GlobalExceptionHandler : handleEventNotFound(EventNotFoundException) 
                
                GlobalExceptionHandler : handleEventStartTimeHasAlreadyPassed(EventStartTimeHasAlreadyPassedException) 
                
                GlobalExceptionHandler : handleNotEnoughSeats(NotEnoughSeatsException) 
                
                GlobalExceptionHandler : handleNotEnoughSeats(InvalidCouponException) 
                
                GlobalExceptionHandler : handleUserMismatch(BookingUserMismatchException) 
                
                GlobalExceptionHandler : handleNoSeatsToCancel(NoSeatsToCancelException) 
                
                GlobalExceptionHandler : handleCancellingMore(CancellingMoreThanBookedException) 
                
                GlobalExceptionHandler : handleBookingDoesNotExist(BookingDoesNotExistException) 
                
                GlobalExceptionHandler : handleCancellingTooLate(CancellingTooLateException) 
                
        class \`BookingCancellationRepository.java\` {
            Type: File
            Contains: Database Repository
            Path: .../repository/BookingCancellationRepository.java
        }

        class BookingCancellationRepository{
            Type: Class
            FileName: BookingCancellationRepository.java
        }

        \`BookingCancellationRepository.java\` --|> BookingCancellationRepository : Defines
        
        class \`BookingRepository.java\` {
            Type: File
            Contains: Database Repository
            Path: .../repository/BookingRepository.java
        }

        class BookingRepository{
            Type: Class
            FileName: BookingRepository.java
        }

        \`BookingRepository.java\` --|> BookingRepository : Defines
        
                BookingRepository : checkIfBookingExists(Event) 
                
                BookingRepository : findMyAllUpcomingBookings(Long, LocalDate) 
                
                BookingRepository : findMyAllPastBookings(Long, LocalDate) 
                
        class \`CouponRepository.java\` {
            Type: File
            Contains: Database Repository
            Path: .../repository/CouponRepository.java
        }

        class CouponRepository{
            Type: Class
            FileName: CouponRepository.java
        }

        \`CouponRepository.java\` --|> CouponRepository : Defines
        
                CouponRepository : findAllByEventTypeId(Long) 
                
                CouponRepository : findByExpiryBefore(LocalDateTime) 
                
                CouponRepository : findByCouponCountLessThanEqual(int) 
                
        class \`EventRepository.java\` {
            Type: File
            Contains: Database Repository
            Path: .../repository/EventRepository.java
        }

        class EventRepository{
            Type: Class
            FileName: EventRepository.java
        }

        \`EventRepository.java\` --|> EventRepository : Defines
        
                EventRepository : findByEventTypeIdAndTheaterIdAndTime(Theater, EventType, LocalDateTime, LocalDateTime) 
                
                EventRepository : findUpcomingEvents(LocalDateTime) 
                
                EventRepository : findAllEventsOfThisEventType(String) 
                
                EventRepository : findAllEventsAtThisTheater(String) 
                
                EventRepository : findAllByEventName(String) 
                
        class \`EventTypeRepository.java\` {
            Type: File
            Contains: Database Repository
            Path: .../repository/EventTypeRepository.java
        }

        class EventTypeRepository{
            Type: Class
            FileName: EventTypeRepository.java
        }

        \`EventTypeRepository.java\` --|> EventTypeRepository : Defines
        
                EventTypeRepository : findAll, count, save, findById, deleteById, delete, findAllById, existsById 
                
        class \`TheaterRepository.java\` {
            Type: File
            Contains: Database Repository
            Path: .../repository/TheaterRepository.java
        }

        class TheaterRepository{
            Type: Class
            FileName: TheaterRepository.java
        }

        \`TheaterRepository.java\` --|> TheaterRepository : Defines
        
                TheaterRepository : findAll, findById, save, deleteById, count, ... 
                
        class \`UserRepository.java\` {
            Type: File
            Contains: Database Repository
            Path: .../repository/UserRepository.java
        }

        class UserRepository{
            Type: Class
            FileName: UserRepository.java
        }

        \`UserRepository.java\` --|> UserRepository : Defines
        
                UserRepository : findByEmail(String) 
                
                UserRepository : save(User) 
                
                UserRepository : findAll() 
                
                UserRepository : findById(Long) 
                
                UserRepository : deleteById(Long) 
                
                UserRepository : delete(User) 
                
                UserRepository : existsById(Long) 
                
        class \`MyCouponScheduler.java\` {
            Type: File
            Contains: Class
            Path: .../scheduler/
        }

        class MyCouponScheduler{
            Type: Class
            FileName: 
        }

        \`MyCouponScheduler.java\` --|> MyCouponScheduler : Defines
        
                MyCouponScheduler : deleteExpiredCoupons() 
                
        class \`JwtAuthenticationFilter.java\` {
            Type: File
            Contains: Class
            Path: .../security/JwtAuthenticationFilter.java
        }

        class JwtAuthenticationFilter{
            Type: Class
            FileName: JwtAuthenticationFilter.java
        }

        \`JwtAuthenticationFilter.java\` --|> JwtAuthenticationFilter : Defines
        
                JwtAuthenticationFilter : doFilterInternal(HttpServletRequest, HttpServletResponse, FilterChain) 
                
        class \`JwtService.java\` {
            Type: File
            Contains: Service
            Path: .../security/JwtService.java
        }

        class JwtService{
            Type: Class
            FileName: JwtService.java
        }

        \`JwtService.java\` --|> JwtService : Defines
        
                JwtService : generateToken(UserDetails) 
                
                JwtService : extractUsername(String) 
                
                JwtService : isTokenValid(String) 
                
        class \`MyUserDetails.java\` {
            Type: File
            Contains: Class
            Path: .../security/MyUserDetails.java
        }

                    class \`UserDetails\` {
                    }

                    MyUserDetails ..|> \`UserDetails\` : Implements
                
        class MyUserDetails{
            Type: Class
            FileName: MyUserDetails.java
        }

        \`MyUserDetails.java\` --|> MyUserDetails : Defines
        
                MyUserDetails : MyUserDetails(User) 
                
                MyUserDetails : getAuthorities() 
                
                MyUserDetails : getPassword() 
                
                MyUserDetails : getUsername() 
                
                MyUserDetails : isAccountNonExpired() 
                
                MyUserDetails : isAccountNonLocked() 
                
                MyUserDetails : isCredentialsNonExpired() 
                
                MyUserDetails : isEnabled() 
                
        class \`SecurityConfiguration.java\` {
            Type: File
            Contains: Class
            Path: .../security/SecurityConfiguration.java
        }

        class SecurityConfiguration{
            Type: Class
            FileName: SecurityConfiguration.java
        }

        \`SecurityConfiguration.java\` --|> SecurityConfiguration : Defines
        
                SecurityConfiguration : authenticationProvider() 
                
                SecurityConfiguration : authenticationManager() 
                
                SecurityConfiguration : passwordEncoder() 
                
                SecurityConfiguration : filterChain(HttpSecurity) 
                
        class \`UserDetailsServiceImpl.java\` {
            Type: File
            Contains: Service
            Path: .../security/UserDetailsServiceImpl.java
        }

                    class \`UserDetailsService\` {
                    }

                    UserDetailsServiceImpl ..|> \`UserDetailsService\` : Implements
                
        class UserDetailsServiceImpl{
            Type: Class
            FileName: UserDetailsServiceImpl.java
        }

        \`UserDetailsServiceImpl.java\` --|> UserDetailsServiceImpl : Defines
        
                UserDetailsServiceImpl : loadUserByUsername(String) 
                
        class \`CouponService.java\` {
            Type: File
            Contains: Service
            Path: .../service/CouponService.java
        }

        class CouponService{
            Type: Interface
            FileName: CouponService.java
        }

        \`CouponService.java\` --|> CouponService : Defines
        
                CouponService : addNewCoupon(com.hashedin.huSpark.model.Coupon) 
                
                CouponService : deleteExpiredCoupons() 
                
        class \`EventService.java\` {
            Type: File
            Contains: Service
            Path: .../service/EventService.java
        }

        class EventService{
            Type: Interface
            FileName: EventService.java
        }

        \`EventService.java\` --|> EventService : Defines
        
                EventService : addNewEvent(Event) 
                
                EventService : deleteThisEvent(Long) 
                
                EventService : getUpcomingEvents() 
                
                EventService : findAllByEventName(String) 
                
                EventService : findAllEventsOfThisEventType(String) 
                
                EventService : findAllEventsAtThisTheater(String) 
                
                EventService : findEventsWithPaginationAndSorting(int, int, String) 
                
        class \`EventTypeService.java\` {
            Type: File
            Contains: Service
            Path: .../service/EventTypeService.java
        }

        class EventTypeService{
            Type: Interface
            FileName: EventTypeService.java
        }

        \`EventTypeService.java\` --|> EventTypeService : Defines
        
                EventTypeService : addNewEventType(EventType) 
                
                EventTypeService : getAllEventTypes() 
                
        class \`TheaterService.java\` {
            Type: File
            Contains: Service
            Path: .../service/TheaterService.java
        }

        class TheaterService{
            Type: Interface
            FileName: TheaterService.java
        }

        \`TheaterService.java\` --|> TheaterService : Defines
        
                TheaterService : addTheater(Theater) 
                
        class \`UserService.java\` {
            Type: File
            Contains: Service
            Path: .../service/UserService.java
        }

        class UserService{
            Type: Interface
            FileName: UserService.java
        }

        \`UserService.java\` --|> UserService : Defines
        
                UserService : addUser(User) 
                
                UserService : getToken(LoginForm) 
                
        class \`BookingServiceImpl.java\` {
            Type: File
            Contains: Class
            Path: .../impl/BookingServiceImpl.java
        }

                    class \`BookingService\` {
                    }

                    BookingServiceImpl ..|> \`BookingService\` : Implements
                
        class BookingServiceImpl{
            Type: Class
            FileName: BookingServiceImpl.java
        }

        \`BookingServiceImpl.java\` --|> BookingServiceImpl : Defines
        
                BookingServiceImpl : bookMyShow(Booking) 
                
                BookingServiceImpl : cancelMyShow(Long, Integer) 
                
                BookingServiceImpl : findMyUpcomingBookings() 
                
                BookingServiceImpl : findMyPastBookings() 
                
        class \`CouponServiceImpl.java\` {
            Type: File
            Contains: Service
            Path: .../impl/CouponServiceImpl.java
        }

                    class \`CouponService\` {
                    }

                    CouponServiceImpl ..|> \`CouponService\` : Implements
                
        class CouponServiceImpl{
            Type: Class
            FileName: CouponServiceImpl.java
        }

        \`CouponServiceImpl.java\` --|> CouponServiceImpl : Defines
        
                CouponServiceImpl : addNewCoupon(com.hashedin.huSpark.model.Coupon) 
                
                CouponServiceImpl : deleteExpiredCoupons() 
                
        class \`EventServiceImpl.java\` {
            Type: File
            Contains: Service
            Path: .../impl/EventServiceImpl.java
        }

                    class \`EventService\` {
                    }

                    EventServiceImpl ..|> \`EventService\` : Implements
                
        class EventServiceImpl{
            Type: Class
            FileName: EventServiceImpl.java
        }

        \`EventServiceImpl.java\` --|> EventServiceImpl : Defines
        
                EventServiceImpl : addNewEvent(Event) 
                
                EventServiceImpl : deleteThisEvent(Long) 
                
                EventServiceImpl : getUpcomingEvents() 
                
                EventServiceImpl : findAllByEventName(String) 
                
                EventServiceImpl : findAllEventsOfThisEventType(String) 
                
                EventServiceImpl : findAllEventsAtThisTheater(String) 
                
                EventServiceImpl : findEventsWithPaginationAndSorting(int, int, String) 
                
        class \`EventTypeServiceImpl.java\` {
            Type: File
            Contains: Service Implementation
            Path: .../impl/EventTypeServiceImpl.java
        }

                    class \`EventTypeService\` {
                    }

                    EventTypeServiceImpl ..|> \`EventTypeService\` : Implements
                
        class EventTypeServiceImpl{
            Type: Class
            FileName: EventTypeServiceImpl.java
        }

        \`EventTypeServiceImpl.java\` --|> EventTypeServiceImpl : Defines
        
                EventTypeServiceImpl : addNewEventType(EventType) 
                
                EventTypeServiceImpl : getAllEventTypes() 
                
        class \`TheaterServiceImpl.java\` {
            Type: File
            Contains: Service
            Path: .../impl/TheaterServiceImpl.java
        }

                    class \`TheaterService\` {
                    }

                    TheaterServiceImpl ..|> \`TheaterService\` : Implements
                
        class TheaterServiceImpl{
            Type: Class
            FileName: TheaterServiceImpl.java
        }

        \`TheaterServiceImpl.java\` --|> TheaterServiceImpl : Defines
        
                TheaterServiceImpl : addTheater(Theater) 
                
        class \`UserServiceImpl.java\` {
            Type: File
            Contains: Service
            Path: .../impl/UserServiceImpl.java
        }

                    class \`UserService\` {
                    }

                    UserServiceImpl ..|> \`UserService\` : Implements
                
        class UserServiceImpl{
            Type: Class
            FileName: UserServiceImpl.java
        }

        \`UserServiceImpl.java\` --|> UserServiceImpl : Defines
        
                UserServiceImpl : addUser(User) 
                
                UserServiceImpl : getToken(LoginForm) 
                
            CouponController --> CouponService : Invokes
            
            EventController --> EventService : Invokes
            
            EventTypeController --> EventTypeService : Invokes
            
            TheaterController --> TheaterService : Invokes
            
            UserController --> UserService : Invokes
            
            MyCouponScheduler --> CouponService : Invokes
            
            JwtAuthenticationFilter --> JwtService : Invokes
            
            UserDetailsServiceImpl --> UserRepository : Invokes
            
            CouponServiceImpl --> CouponRepository : Invokes
            
            UserServiceImpl --> JwtService : Invokes
            


        class \`Booking.java\` {
            Type: File
            Contains: Model/Entity/DTO
            Path: .../model/Booking.java
        }

        class Booking {
            Type: Class
            Fields: [

Long bookingId

Integer totalNoOfSeatsBooked

Integer totalNoOfSeatsCancelled

Float totalAmountPayed

LocalDate bookingDate

User user

Event event

Coupon coupon

Set~BookingCancellation~ bookingCancellations
]
        }

        \`Booking.java\` --|> Booking : Defines
        
        class \`BookingCancellation.java\` {
            Type: File
            Contains: Model/Entity/DTO
            Path: .../model/BookingCancellation.java
        }

        class BookingCancellation {
            Type: Class
            Fields: [

Long cancellationId

Float amountRefunded

LocalDateTime cancellationTime

Booking booking
]
        }

        \`BookingCancellation.java\` --|> BookingCancellation : Defines
        
        class \`Coupon.java\` {
            Type: File
            Contains: Model/Entity/DTO
            Path: .../model/Coupon.java
        }

        class Coupon {
            Type: Class
            Fields: [

Long couponId

String couponCode

Float offPercentage

LocalDateTime expiry

Integer couponCount

EventType eventType

Set~Booking~ booking
]
        }

        \`Coupon.java\` --|> Coupon : Defines
        
        class \`Event.java\` {
            Type: File
            Contains: Model/Entity/DTO
            Path: .../model/Event.java
        }

        class Event {
            Type: Class
            Fields: [

Long eventId

String eventName

Integer availableSeats

LocalDateTime startTime

LocalDateTime endTime

EventType eventType

Theater theater

Set~Booking~ setOfBookings
]
        }

        \`Event.java\` --|> Event : Defines
        
        class \`EventType.java\` {
            Type: File
            Contains: Model/Entity/DTO
            Path: .../model/EventType.java
        }

        class EventType {
            Type: Class
            Fields: [

Long eventTypeId

Float gstPercentage

Float price

String type

Set~Coupon~ setOfCoupons

Set~Event~ setOfEvents
]
        }

        \`EventType.java\` --|> EventType : Defines
        
        class \`Theater.java\` {
            Type: File
            Contains: Model/Entity/DTO
            Path: .../model/Theater.java
        }

        class Theater {
            Type: Class
            Fields: [

Long theaterId

String theaterName

String city

Integer movieSeatsCapacity

Integer concertSeatsCapacity

Integer liveShowSeatsCapacity

Set~Event~ setOfEvents
]
        }

        \`Theater.java\` --|> Theater : Defines
        
        class \`User.java\` {
            Type: File
            Contains: Model/Entity/DTO
            Path: .../model/User.java
        }

        class User {
            Type: Class
            Fields: [

Long userId

String name

String email

String password

String mobile

LocalDate dateOfBirth

Integer bookingsCount

String role

Set~Booking~ setOfBookings
]
        }

        \`User.java\` --|> User : Defines
        
`